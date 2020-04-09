export class Product {
  id: number;
  name: string;
  price: number;
  link: string;
  description: string;
  constructor(id: number, name: string, price: number, link: string, description: string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.link = link;
    this.description = description;
  }
}
