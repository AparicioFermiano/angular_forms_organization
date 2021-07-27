import { Product } from './../product.model';
import { HeaderService } from './../../header/header.service';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  public filterBy: string = '';

  public FilterProducts: Product[] = []

  private ProductSubscription: Subscription = new Subscription;

  constructor(private productService:ProductService, headerService: HeaderService) {
    headerService.header = {
      icon: 'bi-arrow-down-circle-fill',
      name: 'Cadastro de Produtos',
      link: '/insert'
    }
   }

   public Loading:boolean = false;

  ngOnInit(): void {
    this.Loading = true
    this.productService.get().subscribe(products => {
      this.products = products
      this.FilterProducts = this.products
      this.Loading = false
    })

    // Se inscreve no objeto para avaliar se teve modificação
    this.ProductSubscription = this.productService.ProdutsAtualizadoObservable().subscribe((product: Product[]) => {
      this.FilterProducts = product
    // this.ProductSubscription =
    //   this.Loading = false
    console.log(this.products)
    })

  }

  onDelete(id:any): void{
    this.productService.del(id).subscribe(() => {
      this.products = this.products.filter((products) => {
        return products.id !== id
      })

      this.productService.showMessage('Produto excluido com sucesso!')
      this.productService.listaProductAtualizada.next([...this.products])
      console.log(this.products)
    })


  }

  set filterProducts(filter : string){
    this.filterBy = filter
    this.FilterProducts = this.products.filter(
      (product: Product) =>
        product.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) !== -1)
  }

  get filterProducts(): string{
    return this.filterBy

  }

  ngOnDestroy(): void {
    this.ProductSubscription.unsubscribe();
  }


}
