import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApproveLeaveComponent } from './add-approve-leave.component';

describe('AddApproveLeaveComponent', () => {
  let component: AddApproveLeaveComponent;
  let fixture: ComponentFixture<AddApproveLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApproveLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApproveLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
