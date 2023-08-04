import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukComponent } from './produk.component';

describe('ProdukComponent', () => {
  let component: ProdukComponent;
  let fixture: ComponentFixture<ProdukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdukComponent]
    });
    fixture = TestBed.createComponent(ProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
