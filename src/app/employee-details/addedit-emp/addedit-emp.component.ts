import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addedit-emp',
  templateUrl: './addedit-emp.component.html',
  styleUrls: ['./addedit-emp.component.scss']
})
export class AddeditEmpComponent implements OnInit {
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
      empName: ['', Validators.required],
      offceName: ['', Validators.required],
      offceCde: ['', Validators.required],
      cadreCde: ['', Validators.required],
      gender: ['', Validators.required],
      cadCat: ['', Validators.required],
      cadName: ['', Validators.required],
      brthPlce: ['', Validators.required],
      dob: ['', Validators.required],
      religion: ['', Validators.required],
      mthrTng: ['', Validators.required],
      subCaste: ['', Validators.required],
      community: ['', Validators.required],
      preAddr: ['', Validators.required],
      bloodGrp: ['', Validators.required],
      aadharNo: ['', Validators.required],
      perAddr: ['', Validators.required],
      mbleNo: ['', Validators.required],
      panNo: ['', Validators.required],
      minQuali: ['', Validators.required],
      email: ['', Validators.required],
      idenMrk: ['', Validators.required],
      maxQuail: ['', Validators.required],
      diffrAbled: ['', Validators.required],
      diffrcat: [''],
      diffrper: [''],
      minQualiFile: [''],
      maxQualiFile: [''],
      empPho: [''],
      empSig: ['']
    })

    this.appointFormGroup = this.fb.group({
      mdeApp: ['', Validators.required],
      appDate: ['', Validators.required],
      iniAppCadre: ['', Validators.required],
      dteJoinSer: ['', Validators.required],
      regd: ['', Validators.required],
      probDec: ['', Validators.required],
      appOrderFile: ['']
    })

    this.retireFormGroup = this.fb.group({
      mdeRetre: ['', Validators.required],
      fbfDate: ['', Validators.required],
      fbfAmt: ['', Validators.required],
      rtePerSta: ['', Validators.required],
      dteAllSer: ['', Validators.required],
      rgrRtreAdm: ['', Validators.required],
      penSancDte: ['', Validators.required],
      penRtreAdm: ['', Validators.required],
      propenSancDte: ['', Validators.required],
    })

    this.leaveForm =this.fb.group({
      earndCreDay: ['', Validators.required],
      availDay: ['', Validators.required],
      earndBalDay: ['', Validators.required],
      mdclCreDay: ['', Validators.required],
      mdclAvailDay: ['', Validators.required],
      mdclBalDay: ['', Validators.required],
      unearnLeavCreDay: ['', Validators.required],
      unearnLeavAvaDay: ['', Validators.required],
      unearnLeavBalDay: ['', Validators.required],
      loswthMc: ['', Validators.required],
      loswthoutMc: ['', Validators.required],
      casLeav: ['', Validators.required],
      restLeav: ['', Validators.required],
      availAdopChild: ['', Validators.required],
      matLeave: ['', Validators.required],
      stuLeave: ['', Validators.required],
      abdempLeave: ['', Validators.required],
      famPlnLeave: ['', Validators.required],
      spclCasLeave: ['', Validators.required],
      disAbilityLeave: ['', Validators.required],
      abortLeave: ['', Validators.required],
      chargePending: ['', Validators.required],
      empUnblSer: ['', Validators.required],
      empUnblDte: ['', Validators.required],
    })
  }
}
