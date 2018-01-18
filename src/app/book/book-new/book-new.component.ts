import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  formGroup: FormGroup;
  private book: Book;

  constructor(private fb: FormBuilder) {
    // this.book = <Book>{};
    this.book = {} as Book;
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: [this.book.title, Validators.required],
      subtitle: [''],
      author: ['', Validators.required],
      isbn: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  save(data) {
    this.book = {
      ...data
    };
    console.log(data);
  }

}
