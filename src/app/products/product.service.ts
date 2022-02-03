import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'hksjdhfskdfh';
  // data.createdAt = new Date(1998, 1, 1);
  products.push(data);
}


export const updateProduct = (id: string, changes: Product ) => {
  // code
}
