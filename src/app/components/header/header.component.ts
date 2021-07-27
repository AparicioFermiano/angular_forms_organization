import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService) {
    headerService.header = {
      icon: 'bi-arrow-down-circle-fill',
      name: 'Cadastro de Produtos',
      link: '/insert'
    }
  }

  get icon(): string {
    return this.headerService.header.icon
  }
  get name(): string {
    return this.headerService.header.name
  }
  get link(): string {
    return this.headerService.header.link
  }


  ngOnInit(): void {

  }

}
