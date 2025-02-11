import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeruhitzegitenPage } from './peruhitzegiten.page';

describe('PeruhitzegitenPage', () => {
  let component: PeruhitzegitenPage;
  let fixture: ComponentFixture<PeruhitzegitenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruhitzegitenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
