import { Injectable } from '@angular/core';
import { Product } from './products';
import { Category, categories} from './categories';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

	getCategory(categoryId: number): Observable<Category> {
		return of(categories.find(category => category.id === categoryId))
	}
	
  constructor() { }
}
