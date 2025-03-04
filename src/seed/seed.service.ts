import { Injectable } from '@nestjs/common';

import { initialData } from './datos/datos_seed';
import { ProductsService } from './../products/products.service';



@Injectable()
export class SeedService {

  constructor(
    private readonly productsService: ProductsService
  ) { }

  async runSeed() {
    await this.restauraProductos();
    return 'SEED EJECUTADO';
  }

  private async restauraProductos() {
    await this.productsService.deleteAllProducts();

    const seedProductos = initialData.productos;

    const insertPromesa = [{}];

    seedProductos.forEach(product => {
      insertPromesa.push(this.productsService.create(product));
    });

    await Promise.all(insertPromesa);

    return true;
  }
}
