import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  consumerPayForm: FormGroup;
  personalForm: FormGroup;
  appointFormGroup: FormGroup;
  retireFormGroup: FormGroup;
  leaveForm:FormGroup;
  types: string[] = [];
  submitted = false;
  edit = false;
  couponId: string;
  view = false;
  couponsDetails: any;

  constructor(private fb: FormBuilder, private router: Router, private snackbar: MatSnackBar, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.consumerPayForm = this.fb.group({
      scale: ['', Validators.required],
      basicPay: ['', Validators.required],
      level: ['', Validators.required],
      cell: ['', Validators.required],
      increDueDate: ['', Validators.required],
    })


    this.personalForm = this.fb.group({
      empId: ['', Validators.required],
      proCadCode: ['', Validators.required],
      empName: ['', Validators.required],
      proCadName: ['', Validators.required],
      gender: ['', Validators.required],
      proCadCate: ['', Validators.required],
      cadCod: ['', Validators.required],
      preOfcNam: ['', Validators.required],
      cadName: ['', Validators.required],
      posOfcCod: ['', Validators.required],
      cadCate: ['', Validators.required],
      posOfcNam: ['', Validators.required],
      preOfcCode: ['', Validators.required],
      datOfReli: ['', Validators.required],
      preOfcName: ['', Validators.required],
      datOfJoin: ['', Validators.required],
      datOfPromo: ['', Validators.required],
      joiTimeEL: ['', Validators.required],
      remarksTenu: ['', Validators.required]
      
      
    })
}
}
