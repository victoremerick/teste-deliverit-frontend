import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegraCobrancaComponent } from './regra-cobranca.component';

describe('RegraCobrancaComponent', () => {
  let component: RegraCobrancaComponent;
  let fixture: ComponentFixture<RegraCobrancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegraCobrancaComponent]
    });
    fixture = TestBed.createComponent(RegraCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
