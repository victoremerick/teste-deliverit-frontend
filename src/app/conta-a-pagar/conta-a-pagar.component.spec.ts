import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAPagarComponent } from './conta-a-pagar.component';

describe('ContaAPagarComponent', () => {
  let component: ContaAPagarComponent;
  let fixture: ComponentFixture<ContaAPagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContaAPagarComponent]
    });
    fixture = TestBed.createComponent(ContaAPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
