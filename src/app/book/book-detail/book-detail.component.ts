import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import 'rxjs/Rx';
import { Book } from '../shared/book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.mergeMap(params => {
      return this.bookData.getBookByIsbn(params.isbn);
    })
      .subscribe(book => {
        this.book = book;
      });
  }

}
