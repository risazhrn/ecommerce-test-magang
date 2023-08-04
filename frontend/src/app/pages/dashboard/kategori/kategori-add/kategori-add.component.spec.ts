import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriAddComponent } from './kategori-add.component';

describe('KategoriAddComponent', () => {
  let component: KategoriAddComponent;
  let fixture: ComponentFixture<KategoriAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategoriAddComponent]
    });
    fixture = TestBed.createComponent(KategoriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
