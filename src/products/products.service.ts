import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as esUUID } from 'uuid';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from '../commond/dtos/pagination.dto';
import { Product } from './entities/product.entity';




@Injectable()
export class ProductsService {


  private readonly looger = new Logger('ProductsService')

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }



  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);

      return product;

    } catch (error) {
      this.sqlErrorDeCarga(error);
    }

  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 1 } = paginationDto;
    return this.productRepository.find({ take: limit, skip: offset })
  }

  async findOne(term: string) {

    //let product: Product;
    let product = await this.productRepository.findOneBy({ id: term });

    if (esUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      const queryConstruida = this.productRepository.createQueryBuilder()
      product = await queryConstruida
        .where('UPPER(titulo) = :titulo or slug = :slug', {
          titulo: term.toUpperCase(),
          slug: term.toLowerCase()
        }).getOne();
    }

    //const producto = await this.productRepository.findOneBy({ id });
    if (!product) { throw new NotFoundException(`El ID ${term} del prducto no existe`) }

    return product;
  }



  async update(id: string, updateProductDto: UpdateProductDto) {

    const producto = await this.productRepository.preload({
      id: id,
      ...updateProductDto
    });

    if (!producto) {
      throw new NotFoundException(`El producto con el ID ${id} no existe`)
    }

    try {
      await this.productRepository.save(producto);
      return producto;
    } catch (error) {
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

}
