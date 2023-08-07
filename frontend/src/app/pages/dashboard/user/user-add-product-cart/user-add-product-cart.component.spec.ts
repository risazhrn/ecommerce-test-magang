import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductCartComponent } from './user-add-product-cart.component';

describe('UserAddProductCartComponent', () => {
  let component: UserAddProductCartComponent;
  let fixture: ComponentFixture<UserAddProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddProductCartComponent]
    });
    fixture = TestBed.createComponent(UserAddProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
