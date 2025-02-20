import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { PaginationDto } from '../commond/dtos/pagination.dto';



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

    const { limit = 10, offset = 0 } = paginationDto

    return this.productRepository.find({
      take: limit,
      skip: offset,
      // TODO relaciones

    })
  }

  async findOne(id: string) {

    const producto = await this.productRepository.findOneBy({ id });
    if (!producto) { throw new NotFoundException(`El ID ${id} del prducto no existe`) }

    return producto;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
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
