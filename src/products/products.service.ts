import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { validate as esUUID } from 'uuid';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from '../commond/dtos/pagination.dto';
import { Product } from './entities/product.entity';
import { ProductImagen } from './entities/product_imagen_entity';




@Injectable()
export class ProductsService {


  private readonly looger = new Logger('ProductsService')

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,


    @InjectRepository(ProductImagen)
    private readonly productImagenRepository: Repository<ProductImagen>,


    private readonly dataSource: DataSource,

  ) { }



  async create(createProductDto: CreateProductDto) {
    try {

      const { imagenes = [], ...productoDetalle } = createProductDto;

      const product = this.productRepository.create({
        ...productoDetalle,
        imagenes: imagenes.map(imagen => this.productImagenRepository.create({ url: imagen })),
      });
      await this.productRepository.save(product);

      return { ...product, imagenes };

    } catch (error) {
      this.sqlErrorDeCarga(error);
    }

  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 1 } = paginationDto;
    return this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        imagenes: true,
      }
    })
  }

  async findOne(term: string) {

    //let product: Product | null;
    let product = await this.productRepository.findOneBy({ id: term });

    if (esUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      const queryConstruida = this.productRepository.createQueryBuilder('prod')
      product = await queryConstruida
        .where('UPPER(titulo) = :titulo or slug = :slug', {
          titulo: term.toString().toUpperCase(),
          slug: term.toString().toLowerCase()
        })
        .leftJoinAndSelect('prod.imagenes', 'prodimageens')
        .getOne();
    }

    //const producto = await this.productRepository.findOneBy({ id });
    //console.log(product);
    if (!product) { throw new NotFoundException(`El ID ${term} del prducto no existe`) }

    return product;
  }



  async update(id: string, updateProductDto: UpdateProductDto) {

    const { imagenes, ...toUpdate } = updateProductDto;

    const producto = await this.productRepository.preload({ id, ...toUpdate });

    if (!producto) {
      throw new NotFoundException(`El producto con el ID ${id} no existe`)
    }

    //Crear query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      if (imagenes) {
        await queryRunner.manager.delete(ProductImagen, { producto: { id } })
        producto.imagenes = imagenes.map(
          image => this.productImagenRepository.create({ url: image })
        )
      }

      await queryRunner.manager.save(producto);
      //await this.productRepository.save(producto);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return producto;

    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw new BadRequestException(error.driverError.sqlMessage)
      //console.log(error)
    }


  }

  async remove(id: string) {
    const prodcuto = await this.findOne(id);
    await this.productRepository.remove(prodcuto);

    return `Artículo con ID ${id} eliminado`;
  }


  private sqlErrorDeCarga(error: any) {
    //console.log(error);
    //if (error.QueryFailedError === 'ER_DUP_ENTRY') throw new BadRequestException(error.driverError)
    //throw new BadRequestException(error.QueryFailedError)
    this.looger.error(error);
    throw new InternalServerErrorException(error.driverError.sqlMessage)

  }


  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {

      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {

      throw new InternalServerErrorException(error.driverError.sqlMessage)

    }
  }




}
