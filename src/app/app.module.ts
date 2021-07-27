import { ProductModule } from './components/product/product.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes de Routeamento
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Paginas
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './components/header/header.component';

/// ANGULAR MATERIAL ///


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
