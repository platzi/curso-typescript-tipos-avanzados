export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
