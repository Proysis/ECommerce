import { Product } from './product';

export class ProductCategory{
    constructor(){
        this.Product = new Product();
    }
    Product:Product;
    CategoryIds:string[];
}