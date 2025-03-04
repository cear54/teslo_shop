import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

import { ArchivosService } from './archivos.service';
import { fileFilter } from './helpers/file_filter';
import { fileNamer } from './helpers/file_namer';
import { ConfigService } from '@nestjs/config';


@Controller('archivos')
export class ArchivosController {
  constructor(
    private readonly archivosService: ArchivosService,
    private readonly configService: ConfigService,
  ) { }


  @Get('product/:imageName')
  findProductimage(
    @Res() res: Response,
    @Param('imageName') imageNeam: string
  ) {
    const path = this.archivosService.getStatiProductimage(imageNeam);
    res.sendFile(path);

    return path;
  }

  @Post('product')
  @UseInterceptors(FileInterceptor('file',
    {
      fileFilter: fileFilter,
      //limits: {fileSize:2048}
      storage: diskStorage({
        destination: './static/products',
        filename: fileNamer
      })

    }
  ))
  subeArchivo(@UploadedFile() file: Express.Multer.File
  ) {


    if (!file) {
      return new BadRequestException('Asegurese que el archivo es una imagen');
    }

    //const securUrl = `${file.filename}`
    const securUrl = `${this.configService.get('HOST_API')}/archivos/product/${file.filename}`

    return { securUrl }

  }
}
