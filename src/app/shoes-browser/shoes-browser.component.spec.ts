import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesBrowserComponent } from './shoes-browser.component';

describe('ShoesBrowserComponent', () => {
  let component: ShoesBrowserComponent;
  let fixture: ComponentFixture<ShoesBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoesBrowserComponent]
    });
    fixture = TestBed.createComponent(ShoesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
