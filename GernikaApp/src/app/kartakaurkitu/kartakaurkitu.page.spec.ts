import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KartakaurkituPage } from './kartakaurkitu.page';

describe('KartakaurkituPage', () => {
  let component: KartakaurkituPage;
  let fixture: ComponentFixture<KartakaurkituPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KartakaurkituPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
