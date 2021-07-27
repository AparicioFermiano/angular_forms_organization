import { ReplacePipe } from './replace.pipe';
import { LOCALE_ID, NgModule } from "@angular/core";

// Componentes utilizados para mostrar o valor no padrão BRL
import  locatePt  from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(locatePt)

@NgModule({
  declarations: [
    ReplacePipe
  ],
  exports: [
    ReplacePipe
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]


})

export class AppPipeModule {

}
