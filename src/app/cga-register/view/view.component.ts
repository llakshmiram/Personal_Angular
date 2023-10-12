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
  onFileSelected: any;
  fileInput:any;

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
      regSerNo: ['', Validators.required],
      deceStf: ['', Validators.required],
      datOfDeath: ['', Validators.required],
      datOfAppl: ['', Validators.required],
      applName: ['', Validators.required],
      relation: ['', Validators.required],
      applDOB: ['', Validators.required],
      appliAge: ['', Validators.required],
      eduQual: ['', Validators.required],
      application: ['', Validators.required],
      death: ['', Validators.required],
      leglheir: ['', Validators.required],
      eduQuali: ['', Validators.required],
      transfer: ['', Validators.required],
      noc: ['', Validators.required],
      community: ['', Validators.required],
      proforma: ['', Validators.required],
      indigent: ['', Validators.required],
      driving: ['', Validators.required],
      drivingExp: ['', Validators.required],
      typing: ['', Validators.required],
      eligiSts: ['', Validators.required],
      remarks: ['', Validators.required]
      
      
      
    })
}


}
