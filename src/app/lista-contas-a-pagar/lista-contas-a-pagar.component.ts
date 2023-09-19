import { Component, OnInit } from '@angular/core';
import { ContaAPagarService } from '../services/conta-a-pagar.service';

@Component({
  selector: 'app-lista-contas-a-pagar',
  templateUrl: './lista-contas-a-pagar.component.html',
  styleUrls: ['./lista-contas-a-pagar.component.css']
})
export class ListaContasAPagarComponent implements OnInit {
  contasAPagar: any[] = [];

  constructor(private contaAPagarService: ContaAPagarService) { }

  ngOnInit(): void {
    this.carregarContasAPagar();
  }

  carregarContasAPagar() {
    this.contaAPagarService.listarContasAPagarCalculadas()
      .subscribe((contas) => {
        this.contasAPagar = contas;
      }, (error) => {
        console.error('Erro ao buscar contas a pagar:', error);
      });
  }
}
