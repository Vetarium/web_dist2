import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';
import { Category, categories } from '../categories'
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,
    private categoriesService: CategoriesService,
  	private route: ActivatedRoute,
  	private location: Location,
    public router: Router) { }

  products: Product[];
  categories: Category;
  cat: Category[];
  id: number;

  getCategory(): void {
   const id3 = +this.route.snapshot.paramMap.get('categoryId');
   this.categoriesService.getCategory(id3).subscribe(category => this.categories = category)
  }

  getProducts(): void {
  	const id1 = +this.route.snapshot.paramMap.get('categoryId');
    this.id = id1;
   	this.productsService.getProductFromCategory(id1).subscribe(products =>this.products = products);
  }
    private getCategories(): void {
      of(categories).subscribe(category => this.cat = category);
    }


  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
    this.getCategories();
  }

}
