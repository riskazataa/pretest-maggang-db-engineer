import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produk4Component } from './produk4.component';

describe('Produk4Component', () => {
  let component: Produk4Component;
  let fixture: ComponentFixture<Produk4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produk4Component]
    });
    fixture = TestBed.createComponent(Produk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
