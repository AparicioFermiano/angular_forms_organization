import { ErrorComponent } from './error/error.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductTesteComponent } from './components/product/product-teste/product-teste.component';
import { ProductInsertComponent } from './components/product/product-insert/product-insert.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'insert',
    component: ProductInsertComponent,
  },
  {
    path: 'list-test',
    component: ProductTesteComponent,
  },
  {
    path: 'update/:id',
    component: ProductUpdateComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
