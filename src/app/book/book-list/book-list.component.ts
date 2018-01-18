//tslint:disable
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private $subscription: Subscription;
  constructor(
    private bookDataService: BookDataService
  ) {
  }

  ngOnInit() {
    this.$subscription = this.bookDataService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    if (this.$subscription)
      this.$subscription.unsubscribe();
  }

}
