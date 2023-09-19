import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegraCobrancaComponent } from './regra-cobranca/regra-cobranca.component';
import {RegraCobrancaService} from "./services/regra-cobranca.service";
import { ContaAPagarComponent } from './conta-a-pagar/conta-a-pagar.component';
import {ContaAPagarService} from "./services/conta-a-pagar.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListaContasAPagarComponent } from './lista-contas-a-pagar/lista-contas-a-pagar.component';
import { ListaRegrasCobrancaComponent } from './lista-regras-cobranca/lista-regras-cobranca.component';

@NgModule({
  declarations: [
    AppComponent,
    RegraCobrancaComponent,
    ContaAPagarComponent,
    ListaContasAPagarComponent,
    ListaRegrasCobrancaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegraCobrancaService, ContaAPagarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
