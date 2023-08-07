import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailTransactionComponent } from './user-detail-transaction.component';

describe('UserDetailTransactionComponent', () => {
  let component: UserDetailTransactionComponent;
  let fixture: ComponentFixture<UserDetailTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailTransactionComponent]
    });
    fixture = TestBed.createComponent(UserDetailTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
