import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Any, Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { User } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/jwt_payload.interface";


export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
        configService: ConfigService,
    ) {

        super({
            secretOrKey: configService.get('JWT_SECRET')
        });
    }




    async validate(payload: JwtPayload): Promise<User> {

        const { email } = payload;

        //*Consultar base de datos
        const suario = await ...;


        return;
    }

}