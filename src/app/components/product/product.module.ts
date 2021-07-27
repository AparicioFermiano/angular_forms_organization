import { AppPipeModule } from './../../shared/pipes/app.pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

// Paginas
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductTesteComponent } from './product-teste/product-teste.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';


/// ANGULAR MATERIAL ///
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ProductInsertComponent,
    ProductListComponent,
    ProductTesteComponent,
    ProductUpdateComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    MatSnackBarModule,
    AppPipeModule
  ],
  providers: [],
})

export class ProductModule {

}
