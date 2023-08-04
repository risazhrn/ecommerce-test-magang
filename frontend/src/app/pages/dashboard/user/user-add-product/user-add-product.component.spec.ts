import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductComponent } from './user-add-product.component';

describe('UserAddProductComponent', () => {
  let component: UserAddProductComponent;
  let fixture: ComponentFixture<UserAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddProductComponent]
    });
    fixture = TestBed.createComponent(UserAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
