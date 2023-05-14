import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produk1Component } from './produk1.component';

describe('Produk1Component', () => {
  let component: Produk1Component;
  let fixture: ComponentFixture<Produk1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produk1Component]
    });
    fixture = TestBed.createComponent(Produk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
