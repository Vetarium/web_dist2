import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Comment} from './comment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) { }
  comments: Observable<Comment[]>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private url = 'categories/:categoryId/products/:productId/description';

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url)
      .pipe();
  }

  addHero(hero: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url, hero, this.httpOptions)
      .pipe(
      );
  }
}
