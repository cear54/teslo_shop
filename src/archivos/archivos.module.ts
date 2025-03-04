import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';


@Module({
  controllers: [ArchivosController],
  providers: [ArchivosService],
  imports: [ConfigModule],
})
export class ArchivosModule { }
