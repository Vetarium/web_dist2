import { Product } from './products';
import { Category } from './categories';

export class Comment {
  id: number;
  categoryId: Category['id'];
  productId: Product['id'];
  name: string;
  text: string;

  constructor(id: number, categoryId: number, productId: number, name: string, text: string ) {
    this.id = id;
    this.categoryId = categoryId;
    this.productId = productId;
    this.name = name;
    this.text = text;

  }
}

export const comments: Comment[] = [new Comment(1, 1, 1, 'Jesus', 'Nice')];



