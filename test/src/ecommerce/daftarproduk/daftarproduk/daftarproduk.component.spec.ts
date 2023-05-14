import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarprodukComponent } from './daftarproduk.component';

describe('DaftarprodukComponent', () => {
  let component: DaftarprodukComponent;
  let fixture: ComponentFixture<DaftarprodukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaftarprodukComponent]
    });
    fixture = TestBed.createComponent(DaftarprodukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
