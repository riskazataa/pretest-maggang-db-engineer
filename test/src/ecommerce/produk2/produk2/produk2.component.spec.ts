import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produk2Component } from './produk2.component';

describe('Produk2Component', () => {
  let component: Produk2Component;
  let fixture: ComponentFixture<Produk2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produk2Component]
    });
    fixture = TestBed.createComponent(Produk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
