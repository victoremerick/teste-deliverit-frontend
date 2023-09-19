import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaAPagarService {
  private apiUrl = '/api/contasaPagar'; // Substitua pela sua URL

  constructor(private http: HttpClient) { }

  criarContaAPagar(contaAPagar: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, contaAPagar);
  }

  listarContasAPagar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  listarContasAPagarCalculadas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listarComDados`);
  }
}
