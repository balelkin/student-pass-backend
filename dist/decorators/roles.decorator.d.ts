export declare enum RolesEnum {
    admin = "admin",
    user = "user",
    headman = "headman",
    commandant = "commandant"
}
export declare const Roles: (...roles: RolesEnum[]) => import("@nestjs/common").CustomDecorator<string>;
