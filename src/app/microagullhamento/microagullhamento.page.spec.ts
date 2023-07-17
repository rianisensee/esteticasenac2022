import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroagullhamentoPage } from './microagullhamento.page';

describe('MicroagullhamentoPage', () => {
  let component: MicroagullhamentoPage;
  let fixture: ComponentFixture<MicroagullhamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MicroagullhamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
