import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicropgmentacaoPage } from './micropgmentacao.page';

describe('MicropgmentacaoPage', () => {
  let component: MicropgmentacaoPage;
  let fixture: ComponentFixture<MicropgmentacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MicropgmentacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
