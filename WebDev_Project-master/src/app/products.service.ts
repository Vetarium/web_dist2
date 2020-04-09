import { Injectable } from '@angular/core';
import { Product } from './products';
import { Category, categories} from './categories';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	getProductFromCategory(categoryId: number): Observable<Product[]> {
		return of(categories.find(category => category.id === categoryId).products)
	}
	getProductFromProducts(categoryId: number, productId: number): Observable<Product> {
		return of(categories.find(category  => category.id === categoryId).products.find(
			product => product.id === productId))
	}

  constructor() { }
}
