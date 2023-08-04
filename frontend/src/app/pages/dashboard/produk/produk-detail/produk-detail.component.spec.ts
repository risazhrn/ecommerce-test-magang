import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukDetailComponent } from './produk-detail.component';

describe('ProdukDetailComponent', () => {
  let component: ProdukDetailComponent;
  let fixture: ComponentFixture<ProdukDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdukDetailComponent]
    });
    fixture = TestBed.createComponent(ProdukDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
