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
      empOfcCod: ['', Validators.required],
      empOfcName: ['', Validators.required],
      empName: ['', Validators.required],
      empCadCde: ['', Validators.required],
      empSeatNo: ['', Validators.required],
      empFileNo: ['', Validators.required],
      empFileGist: ['', Validators.required],
      fileSts: ['', Validators.required],
      typOfDis: ['', Validators.required],
      fileDisDat: ['', Validators.required]
     
      
      
      
    })
}

}
