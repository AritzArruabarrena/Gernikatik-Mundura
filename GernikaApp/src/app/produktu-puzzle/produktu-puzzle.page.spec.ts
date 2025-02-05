import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduktuPuzzlePage } from './produktu-puzzle.page';

describe('ProduktuPuzzlePage', () => {
  let component: ProduktuPuzzlePage;
  let fixture: ComponentFixture<ProduktuPuzzlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktuPuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
