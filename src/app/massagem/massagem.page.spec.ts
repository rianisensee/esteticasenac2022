import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MassagemPage } from './massagem.page';

describe('MassagemPage', () => {
  let component: MassagemPage;
  let fixture: ComponentFixture<MassagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MassagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
