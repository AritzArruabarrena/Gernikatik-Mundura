import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariMarijesiakPage } from './mari-marijesiak.page';

describe('MariMarijesiakPage', () => {
  let component: MariMarijesiakPage;
  let fixture: ComponentFixture<MariMarijesiakPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MariMarijesiakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
