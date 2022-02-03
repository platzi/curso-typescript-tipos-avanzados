import { BaseModel } from './../base.model';

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
