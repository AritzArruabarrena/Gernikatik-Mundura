import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HizkisopaPage } from './hizkisopa.page';

describe('HizkisopaPage', () => {
  let component: HizkisopaPage;
  let fixture: ComponentFixture<HizkisopaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HizkisopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
