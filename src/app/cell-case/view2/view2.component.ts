import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared-module/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

 
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


  status = [
    { 'status': "Mother", 'value': true },
    { 'status': "Father", 'value': false },
    { 'status': "Spouse", 'value': false },
    { 'status': "Daughter", 'value': false },
    { 'status': "Son", 'value': false },
   
  ]
  selectedValue: string;
  selectedStatus: string;
  noData = false;
  couponsListData: any;
  filteredData: any[];
  dataSource: any;
  dialog: any;
  additionalRows: any;



  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) { }

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
      gender: ['', Validators.required],
      cadCod: ['', Validators.required],
      cadName: ['', Validators.required],
      cadCate: ['', Validators.required],
      ofcCode: ['', Validators.required],
      ofcName: ['', Validators.required],
      filNo: ['', Validators.required],
      natuOfCase: ['', Validators.required],
      modeOfCharg: ['', Validators.required],
      suspenMode: ['', Validators.required],
      datOfSus: ['', Validators.required],
      noOfCharg: ['', Validators.required],
      datOfChar: ['', Validators.required],
      rplyRecvd: ['', Validators.required],
      datOfIOAppo: ['', Validators.required],
      nameOfIO: ['', Validators.required],
      desigOfIO: ['', Validators.required],
      ioReptRecv: ['', Validators.required],
      ioFindng: ['', Validators.required],
      noOfChargPro: ['', Validators.required],
      noOfChargNoPro: ['', Validators.required],
      chargPrtlyProvn: ['', Validators.required],
      frRevdDat: ['', Validators.required],
      authority: ['', Validators.required],
      
      
    })
}



openExportDialog(): void {

}

generateExcel(headers: string[]) {

}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

delete(id: string): void {
  const dialog = this.dialog.open(ConfirmDialogComponent, {
    width: '250px',
    data: {
      from: "delete",
    }
  });
  dialog.afterClosed().subscribe(data => {
    if (data) {


    }
  })
}



applyTypeFilter() {
  if (this.selectedStatus?.length || this.selectedValue?.length) {
    this.filteredData = this.dataSource.data.filter(item => {
      // Check if the item's category is included in the selectedValue array
      if (this.selectedValue?.length && !this.selectedValue?.includes(item.type[0])) {
        return false;
      }

      // Check if the item's colour is included in the selectedColourValue array
      if (this.selectedStatus?.length && !this.selectedStatus?.includes(item.couponStatus[0])) {
        return false;
      }
      // If the item passed both filters, return true
      return true;
    });
  } else {
    this.filteredData = [];
    this.dataSource.data = this.couponsListData;
  }

}

}
