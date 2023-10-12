import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-leave',
  templateUrl: './add-edit-leave.component.html',
  styleUrls: ['./add-edit-leave.component.scss']
})
export class AddEditLeaveComponent implements OnInit {
  leaveFormGrp: FormGroup;
  types: string[] = [];
  submitted = false;
  edit = false;
  couponId: string;
  view = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.leaveFormGrp = this.fb.group({
      date:[''],
      mdeLeave:[''],
      empId:[''],
      lveAvail:[''],
      gender:[''],
      noOfDays:[''],
      cadreCd:[''],
      strtDte:[''],
      cadreNme:[''],
      endDte:[''],
      catgry:[''],
      exemptedDay:[''],
      lveBlce:[''],
      doj:[''],
      lvePur:[''],

    })
  }

}
