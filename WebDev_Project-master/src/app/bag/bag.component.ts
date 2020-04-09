import { Component, OnInit, NgModule } from '@angular/core';
import {of} from 'rxjs';
import {Card, cards} from '../card';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  cards: Card[];
  constructor() { }

  private getCards(): void {
    of(cards).subscribe(card => this.cards = card);
  }

  ngOnInit(): void {
    this.getCards();
  }

}
