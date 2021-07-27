import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, Subject } from 'rxjs';

//  O injectable é utilizado para informar que esse arquivo será injetado dentro de outros conteúdos e seja uma fonte de propriedades
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  // Variavel linkada a URL do servidor de BD
  baseUrl = 'http://localhost:3001/products';

  // Cria uma inscrição quando ocorre uma modificação
  public listaProductAtualizada = new Subject<Product[]>()

  products : Product[] = []

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}


  // Fica observando todas modificações que ocorre na lista
  ProdutsAtualizadoObservable() {
    return this.listaProductAtualizada.asObservable()
  }


  // Criação do produto no banco de dados
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }

  // Recebe os dados cadastrados no banco de dados
  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number): Observable<Product> {
    // Interpolação de dois valores para buscar um conteúdo direto pelo id
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }

  put(product: Product): Observable<Product> {
    // Interpolação de dois valores para buscar um conteúdo direto pelo id
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }

  del(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url)
    .pipe(
      map(obj => obj,
      catchError(e => this.errorHandler(e))));


  }

  // Exibi uma mensagem quando uma ação é feita (cliente)
  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass:  isError ?  ['msg-error'] : ['msg-sucess'] ,
    });
  }
}
