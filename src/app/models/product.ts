<<<<<<< HEAD
export class Product {
  id: number = 0;
  name: string = '';
  image: string = '';
  categoryId: number = 0;
  description: string = '';
  price: number = 0;
  brand: string = '';
  promotion: number = 0;
=======
// src/app/models/product.ts
export class Product {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;

  constructor(
    id: number,
    name: string,
    image: string,
    categoryId: number,
    description: string,
    price: number,
    brand: string,
    promotion: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.promotion = promotion;
  }
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
}
