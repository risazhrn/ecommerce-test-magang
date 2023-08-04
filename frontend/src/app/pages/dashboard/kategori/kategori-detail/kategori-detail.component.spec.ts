import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriDetailComponent } from './kategori-detail.component';

describe('KategoriDetailComponent', () => {
  let component: KategoriDetailComponent;
  let fixture: ComponentFixture<KategoriDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategoriDetailComponent]
    });
    fixture = TestBed.createComponent(KategoriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
