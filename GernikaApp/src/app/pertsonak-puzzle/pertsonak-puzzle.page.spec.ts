import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PertsonakPuzzlePage } from './pertsonak-puzzle.page';

describe('PertsonakPuzzlePage', () => {
  let component: PertsonakPuzzlePage;
  let fixture: ComponentFixture<PertsonakPuzzlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PertsonakPuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
