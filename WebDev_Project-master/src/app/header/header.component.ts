import { Component, OnInit } from '@angular/core';
import { Category, categories } from '../categories';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked = true;
  menuOpened = true;
  isCreate = true;
  categories: Category[];
  username: string;
  password: string;
  repassword: string;
  email: string;
  country: string;

  constructor() { }

   private getCategories(): void {
    of(categories).subscribe(category => this.categories = category);
}

  showForm(){
    this.isClicked = !this.isClicked;
  }

  closeForm(){
    this.isClicked = !this.isClicked;
  }

  closeCreateForm(){
    this.isCreate = !this.isCreate;
  }

  showMenu(){
    this.menuOpened = !this.menuOpened;
  }

  showCreateForm(){
    this.isCreate = !this.isCreate;
    this.isClicked = !this.isClicked;
  }



  ngOnInit(): void {
     this.getCategories();
  }

}
