import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeelingPage } from './peeling.page';

describe('PeelingPage', () => {
  let component: PeelingPage;
  let fixture: ComponentFixture<PeelingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeelingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
