import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-product-teste',
  templateUrl: './product-teste.component.html',
  styleUrls: ['./product-teste.component.css']
})
export class ProductTesteComponent implements AfterViewInit {


  public listaProductAtualizada = new Subject<Product[]>()
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  products:Product[] = []
  displayedColumns = ['id', 'name', 'price','action'];

  constructor(private productService: ProductService) {

  }

  ngAfterViewInit(): void {
    this.productService.get().subscribe(products => {
      this.products = products
    })
  }

  delete(id:string): void{
    this.productService.del(id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!')
      this.listaProductAtualizada.next([...this.products])
    })
    console.log(this.products)
    // console.log(this.products)
    // console.log(this.productService.del)
    // this.ProductSubscription = this.productService.getAtualizado().subscribe((product:Product[]) => {
    //   this.products = product,
    //   this.productService.listaProductAtualizada.next([...this.products])
    // })
  }


}
