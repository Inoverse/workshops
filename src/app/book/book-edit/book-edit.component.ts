import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
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

  save() {
    console.log('Form Data', this.book);
  }
}
