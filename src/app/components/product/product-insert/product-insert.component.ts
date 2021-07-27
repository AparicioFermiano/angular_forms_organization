import { HeaderService } from './../../header/header.service';
import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
  }

  constructor(private productService:ProductService, private router:Router, private headerService:HeaderService) {
    headerService.header = {
      icon: 'bi-camera',
      name: 'Home',
      link: '/'
    }
  }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')
      this.product.name = ''
      this.product.price = null
    })
  }
}
