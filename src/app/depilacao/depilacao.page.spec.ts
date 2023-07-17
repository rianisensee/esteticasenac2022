import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepilacaoPage } from './depilacao.page';

describe('DepilacaoPage', () => {
  let component: DepilacaoPage;
  let fixture: ComponentFixture<DepilacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepilacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
