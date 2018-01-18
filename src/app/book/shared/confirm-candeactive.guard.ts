import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable()
export class ConfirmCandeactiveGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(component: BookDetailComponent): Observable<boolean> | Promise<boolean> | boolean {
      return confirm('Are you sure?');
  }
}
