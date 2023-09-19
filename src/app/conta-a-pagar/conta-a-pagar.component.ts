import { Component } from '@angular/core';
import { ContaAPagarService } from '../services/conta-a-pagar.service';

@Component({
  selector: 'app-conta-a-pagar',
  templateUrl: './conta-a-pagar.component.html',
  styleUrls: ['./conta-a-pagar.component.css']
})
export class ContaAPagarComponent {
  novaContaAPagar: any = {};

  constructor(private contaAPagarService: ContaAPagarService) { }

  criarContaAPagar() {
    this.contaAPagarService.criarContaAPagar(this.novaContaAPagar)
      .subscribe((response) => {
        console.log('Conta a pagar criada com sucesso:', response);
        // Limpar o formulário ou redirecionar para outra página, se necessário.
      }, (error) => {
        console.error('Erro ao criar conta a pagar:', error);
      });
  }
}
