import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule} from '@angular/common/http';
import { ShareModule } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {path: '', redirectTo:'/categories', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:categoryId/products', component: ProductsComponent},
  {path: 'categories/:categoryId/products/:productId/description', component: ProductDetailComponent} 
]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    ShareModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
