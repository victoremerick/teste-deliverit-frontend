import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContasAPagarComponent } from './lista-contas-a-pagar.component';

describe('ListaContasAPagarComponent', () => {
  let component: ListaContasAPagarComponent;
  let fixture: ComponentFixture<ListaContasAPagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaContasAPagarComponent]
    });
    fixture = TestBed.createComponent(ListaContasAPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
