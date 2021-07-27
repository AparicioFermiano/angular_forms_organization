import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { header } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  // BehaviorSubject detecta modificações nos modelos internos.
  private onHeader = new BehaviorSubject<header>({
    icon: 'bi-arrow-down-circle-fill',
    name: 'Cadastro de Produtos',
    link: '/insert'
  })

  constructor() { }


  // Obtem os valores no modelo de header
  get header():header {
    return this.onHeader.value
  }

  set header(header: header) {
    this.onHeader.next(header)
  }
}
