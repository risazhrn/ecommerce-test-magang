import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductDetailComponent } from './user-add-product-detail.component';

describe('UserAddProductDetailComponent', () => {
  let component: UserAddProductDetailComponent;
  let fixture: ComponentFixture<UserAddProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddProductDetailComponent]
    });
    fixture = TestBed.createComponent(UserAddProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
