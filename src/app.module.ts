import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommondModule } from './commond/commond.module';


@Module({
  imports: [
    ConfigModule.forRoot(), //establece las variables de entorno del archivo .env de raiz

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,

    }), ProductsModule, CommondModule,
  ],

})
export class AppModule { }
