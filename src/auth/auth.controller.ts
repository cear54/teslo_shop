import { Controller, Post, Body, Get, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create_user.dto';
import { LoginUserDto } from './dto/login_user.dto';
import { User } from './entities/user.entity';
import { GetUsuario } from './decorators/get_usuario.decorator';
import { RowHeaders } from './decorators/row_headers.decoration';
import { UserRolesGuard } from './guards/user-roles/user-roles.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('registrar')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUsuario() user: User,
    @GetUsuario('email') userMail: string,
    @RowHeaders() rawHeaders: string[],
  ) {

    // console.log(request);

    return {
      probando: 'ok',
      msge: 'funciona privado',
      user,
      userMail,
      rawHeaders,
    }
  }


  //@SetMetadata('roles', ['admin', 'superadmin'])


  @Get('private2')
  @UseGuards(AuthGuard(), UserRolesGuard)
  privateRoute2(
    @GetUsuario() user: User,
  ) {

    return {
      probando: 'ok',
      msge: 'funciona privado2',
      user,
    }
  }

}
