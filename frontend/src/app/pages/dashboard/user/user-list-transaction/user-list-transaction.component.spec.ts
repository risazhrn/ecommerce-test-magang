import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTransactionComponent } from './user-list-transaction.component';

describe('UserListTransactionComponent', () => {
  let component: UserListTransactionComponent;
  let fixture: ComponentFixture<UserListTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListTransactionComponent]
    });
    fixture = TestBed.createComponent(UserListTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
