
import { Component, OnInit } from '@angular/core';
import { Category, categories } from '../categories';
import { of } from 'rxjs';
import { Photo, photos } from "../photos"


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  photos: Photo[];
  categories: Category[];
  imageClicked: boolean = true;
  constructor() { }

  private getCategories(): void {
    of(categories).subscribe(category => this.categories = category);
}
  private getPhotos(): void {
    of(photos).subscribe(photo => this.photos = photo)
  }

  ngOnInit(): void {
    this.getCategories();
    this.getPhotos();
  }

  showInstagram(){
    this.imageClicked = !this.imageClicked;
  }

  closeForm(){
    this.imageClicked = !this.imageClicked;
  }



}