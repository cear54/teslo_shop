import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { User } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/jwt_payload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
        configService: ConfigService,
    ) {

        super({
            secretOrKey: configService.get('JWT_SECRET') as string,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

        });
    }

    async validate(payload: JwtPayload): Promise<User> {

        const { id } = payload;

        //*Consultar base de datos
        const usuario = await this.userRepository.findOneBy({ id });

        if (!usuario) throw new UnauthorizedException('Token no válido');
        if (!usuario.isActive) throw new UnauthorizedException('Usuarios dado de baja');

        return usuario;
    }

}