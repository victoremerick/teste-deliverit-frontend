import { Component, OnInit } from '@angular/core';
import { RegraCobrancaService } from '../services/regra-cobranca.service';

@Component({
  selector: 'app-lista-regras-cobranca',
  templateUrl: './lista-regras-cobranca.component.html',
  styleUrls: ['./lista-regras-cobranca.component.css']
})
export class ListaRegrasCobrancaComponent implements OnInit {
  regrasCobranca: any[] = [];

  constructor(private regraCobrancaService: RegraCobrancaService) { }

  ngOnInit(): void {
    this.carregarRegrasCobranca();
  }

  carregarRegrasCobranca() {
    this.regraCobrancaService.listarRegrasCobranca()
      .subscribe((regras) => {
        this.regrasCobranca = regras;
      }, (error) => {
        console.error('Erro ao buscar regras de cobrança:', error);
      });
  }
}
