import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegraCobrancaService {
  private apiUrl = '/api/regracobranca'; // Substitua pela sua URL

  constructor(private http: HttpClient) { }

  criarRegra(regra: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, regra);
  }

  listarRegrasCobranca(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }
}
