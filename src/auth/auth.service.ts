import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';

import { LoginUserDto } from './dto/login_user.dto';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt_payload.interface';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(@InjectRepository(User)
  private readonly userRepositort: Repository<User>,
    private jwtService: JwtService,) { }


  async create(createUserDto: CreateUserDto) {

    try {


      const { password, ...userData } = createUserDto;

      const usuario = this.userRepositort.create({

        ...userData,
        password: bcrypt.hashSync(password, 10)
      });

      await this.userRepositort.save(usuario)
      //delete usuario.password;
      const { fulName, id, isActive, roles } = usuario
      //return usuario;
      //return { email, fulName, id, isActive, roles };


      return {
        ...usuario,
        token: this.getJwtToken({ id: usuario.id })
      };



    } catch (error) {
      this.handError(error);
    }

  }

  async login(loginUserDto: LoginUserDto) {

    const { password, email } = loginUserDto;

    // const user = await this.userRepositort.findOneBy({ email });
    const user = await this.userRepositort.findOne({

      where: { email },
      select: { email: true, password: true, id: true }

    });


    if (!user) {
      throw new UnauthorizedException('Las credenciales no son válidas (EMAIL)')
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Las credenciales no son válidas (CONTRASEÑA)')
    }

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };
    //TODO: retornar JWT

  };

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }


  private handError(error: any): never {

    if (error.code == 'ER_DUP_ENTRY') {
      throw new BadRequestException(error.sqlMessage);
    }

    console.log(error);

    throw new InternalServerErrorException('Pleace check logs in console');

  };



}
