import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimpezadepelePage } from './limpezadepele.page';

describe('LimpezadepelePage', () => {
  let component: LimpezadepelePage;
  let fixture: ComponentFixture<LimpezadepelePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LimpezadepelePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
