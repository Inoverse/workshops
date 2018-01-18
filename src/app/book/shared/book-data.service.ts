import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:4730/books/${isbn}`);
  }
}
