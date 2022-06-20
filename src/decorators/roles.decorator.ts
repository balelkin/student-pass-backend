import { SetMetadata } from '@nestjs/common';

export enum RolesEnum {
  admin = 'admin',
  user = 'user',
  headman = 'headman',
  commandant = 'commandant',

}

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
