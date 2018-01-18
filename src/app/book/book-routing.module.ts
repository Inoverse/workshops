import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactiveGuard } from './shared/confirm-candeactive.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ''
  }, {
    component: BookNewComponent,
    path: 'new'
  }, {
    component: BookDetailComponent,
    path: ':isbn',
    canDeactivate: [ConfirmCandeactiveGuard]
  }, {
    component: BookEditComponent,
    path: ':isbn/edit'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
