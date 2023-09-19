import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegrasCobrancaComponent } from './lista-regras-cobranca.component';

describe('ListaRegrasCobrancaComponent', () => {
  let component: ListaRegrasCobrancaComponent;
  let fixture: ComponentFixture<ListaRegrasCobrancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegrasCobrancaComponent]
    });
    fixture = TestBed.createComponent(ListaRegrasCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
