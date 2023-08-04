import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukAddComponent } from './produk-add.component';

describe('ProdukAddComponent', () => {
  let component: ProdukAddComponent;
  let fixture: ComponentFixture<ProdukAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdukAddComponent]
    });
    fixture = TestBed.createComponent(ProdukAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
