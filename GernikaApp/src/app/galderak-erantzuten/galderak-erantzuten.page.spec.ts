import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalderakErantzutenPage } from './galderak-erantzuten.page';

describe('GalderakErantzutenPage', () => {
  let component: GalderakErantzutenPage;
  let fixture: ComponentFixture<GalderakErantzutenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalderakErantzutenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
