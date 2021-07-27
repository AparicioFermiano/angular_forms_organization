import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute) { }

  putProduct(){
    this.productService.put(this.product).subscribe(()=> {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/list'])
    })
  }

  cancelProduct(){
    this.router.navigate(['list'])
  }


  ngOnInit(): void {
    // O activateRoute obtem um valor da minha URL baseado no parametro
    const id:any = this.route.snapshot.paramMap.get('id')

    this.productService.getById(id).subscribe({
      next: product => {this.product = product, console.log('Sucess', product)},
      error: err => console.log('Error', err)
      }
      // product => {
      // this.product = product
    )
  }

}
