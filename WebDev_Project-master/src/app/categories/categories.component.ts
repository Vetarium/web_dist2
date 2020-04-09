import { Component, OnInit } from '@angular/core';
import { Category, categories } from '../categories';
import { of } from 'rxjs';
import { Photo, photos } from '../photos';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  p: Photo = {} as any;
  photos: Photo[];
  categories: Category[];
  imageClicked = true;
  constructor() { }

  private getCategories(): void {
    of(categories).subscribe(category => this.categories = category);
}
  private getPhotos(): void {
    of(photos).subscribe(photo => this.photos = photo);
  }

  ngOnInit(): void {
    this.getCategories();
    this.getPhotos();
  }


  closeForm() {
    this.imageClicked = !this.imageClicked;
  }

  showInstagram(photo) {
    this.p = photo
    this.imageClicked = !this.imageClicked;
  }

}
