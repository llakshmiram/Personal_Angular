import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-approve-leave',
  templateUrl: './add-approve-leave.component.html',
  styleUrls: ['./add-approve-leave.component.scss']
})
export class AddApproveLeaveComponent implements OnInit {

  leaveFormGrp: FormGroup;
  types: string[] = [];
  submitted = false;
  edit = false;
  couponId: string;
  view = true;

  // dummyData: any[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.leaveFormGrp = this.fb.group({
      
    })
  }

  // generateDummyData() {
  //   for (let i = 1; i <= 10; i++) {
  //     this.dummyData.push({
  //       sno: 1,
  //       date: '2023-09-26',
  //       empId: 'EMP' + i,
  //       empNme: 'Employee ' + i,
  //       mdeOfLea: 'Vacation',
  //       leaStaDay: '2023-09-26',
  //       leaEndDay: '2023-09-30',
  //       noOfDays: 5,
  //       status: 'Pending'
  //     });
    }
  



