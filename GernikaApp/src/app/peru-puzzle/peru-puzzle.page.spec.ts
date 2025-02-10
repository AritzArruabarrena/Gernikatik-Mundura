import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeruPuzzlePage } from './peru-puzzle.page';

describe('PeruPuzzlePage', () => {
  let component: PeruPuzzlePage;
  let fixture: ComponentFixture<PeruPuzzlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruPuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
