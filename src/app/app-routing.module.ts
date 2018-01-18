import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
}, {
    path: 'books',
    loadChildren: './book/book.module#BookModule'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
