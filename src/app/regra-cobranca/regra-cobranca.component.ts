import { Component } from '@angular/core';
import { RegraCobrancaService } from '../services/regra-cobranca.service';

@Component({
  selector: 'app-regra-cobranca',
  templateUrl: './regra-cobranca.component.html',
  styleUrls: ['./regra-cobranca.component.css']
})
export class RegraCobrancaComponent {
  novaRegraCobranca: any = {};

  constructor(private regraCobrancaService: RegraCobrancaService) { }

  criarRegraCobranca() {
    this.regraCobrancaService.criarRegra(this.novaRegraCobranca)
      .subscribe((response: any) => {
        console.log('Regra de cobrança criada com sucesso:', response);
        // Limpar o formulário ou redirecionar para outra página, se necessário.
      }, (error: any) => {
        console.error('Erro ao criar regra de cobrança:', error);
      });
  }
}
