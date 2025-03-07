import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class UserRolesGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) { }



  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    const validRoles: string[] = this.reflector.get<string[]>('roles', context.getHandler());

    if (!validRoles) return true; // si no hay roles validos, se permite el acceso
    if (validRoles.length === 0) return true; // si no hay roles validos, se permite el acceso

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) throw new Error('No se encontro usuario (request)');

    for (const role of user.roles) {
      if (validRoles.includes(role)) {
        return true;
      }
    }
    throw new ForbiddenException('No tienes permisos para acceder a esta ruta');


  }
}
