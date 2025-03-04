import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { User } from './entities/user.entity';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule,

    TypeOrmModule.forFeature([User]),

    //! Iniciao de cambios JWT
    PassportModule.register({ defaultStrategy: 'jwt' }),
    //! Modulo asyncrono


    JwtModule.registerAsync({
      imports: [],
      inject: [],
      useFactory: () => {
        console.log(process.env.JWT_SECRET);
        return {
          secret: process.env.JWT_SECRET || undefined,
          signOptions: {
            expiresIn: '2h'
          },
        }
      }
    })

    /*
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '2h'
      }
      
    })
*/


  ],
  exports: [TypeOrmModule]
})
export class AuthModule { }
