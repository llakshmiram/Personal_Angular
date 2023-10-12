import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared-module/confirm-dialog/confirm-dialog.component';


export interface AdditionalRows {
  sno: number;
  empId: string;
  empName: string;
  cadCod: string;
  cadName : string;
  movImmov:string;
  action: string;

}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  additionalRows: AdditionalRows[] = [
    { sno: 1, empId: '12345', empName: 'John Doe', cadCod: '12AS', cadName: 'Part', movImmov: 'movable', action:'view'},
    { sno: 2, empId: '12346', empName: 'John', cadCod: '12BS', cadName: 'PartA', movImmov: 'Immovable', action:'next'},
    // Add more data for additional rows as needed
  ];
  // dataSource = new MatTableDataSource<any>([]);
  dataSource:any=[];

  columnsToDisplay = ['sno', 'empId', 'empName', 'cadCod', 'cadName', 'movImmov', 'action'];

   status = [
    { 'status': "Movable", 'value': true },
    { 'status': "Immovable", 'value': false }
  ]
  selectedValue: string;
  selectedStatus: string;
  noData = false;
  couponsListData: any;
  filteredData: any[];
 
  columns = [
    { columnDef: 'sno', header: 'S.No',    cell: (element: any) => element['sno'] },
    { columnDef: 'empId',     header: 'Emp Id',   cell: (element: any) => 'empId'     },
    { columnDef: 'empName',   header: 'Employee Name', cell: (element: any) => `${element.weight}`   },
    { columnDef: 'cadCode',   header: 'Cade Code', cell: (element: any) => `${element.symbol}`   },
    { columnDef: 'cadName', header: 'Cade Name',    cell: (element: any) => element['sno'] },
    { columnDef: 'movImmov',     header: 'Cade Category',   cell: (element: any) => 'empId'     },
    { columnDef: 'action',   header: 'Present Office Code', cell: (element: any) => `${element.weight}`   },
    // { columnDef: 'tranOffcCode',   header: 'Transfer Office Code', cell: (element: any) => `${element.symbol}`   },
  ];
 

  constructor(public dialog: MatDialog, private snackbar: MatSnackBar, private router: Router) {
    
    this.dataSource= new MatTableDataSource([{ sno: 1, empId: '12345', empName: 'John Doe', cadCod: '12AS', cadName: 'Part', movImmov: 'movable', action:'view'},
    { sno: 2, empId: '12346', empName: 'John', cadCod: '12BS', cadName: 'PartA', movImmov: 'Immovable', action:'next'}]);
   }

 
  
  
  ngOnInit(): void {
    // this.dataSource.data = [];
    // this.dataSource.data = this.couponsListData;
    this.filteredData = [];
    this.noData = true;
    let tableData=[];
    // tableData=[
    //   { sno: 1, empId: '12345', empName: 'John Doe', ca dCod: '12AS', cadName: 'Part', movImmov: 'movable', action:'view'},
    //   { sno: 2, empId: '12346', empName: 'John', cadCod: '12BS', cadName: 'PartA', movImmov: 'Immovable', action:'next'},
    //   // Add more data for additional rows as needed
    // ];
    
    // this.dataSource.data = [...this.dataSource.data, ...this.additionalRows];
    // this.dataSource.data = tableData;

    // this.noData = this.dataSource.data.length === 0;
    
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

  edit(type, id) {
    this.router.navigate(['/coupon/' + type, id]);
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
  goToView(request:any){
    if(request && request.movImmov=='Immovable'){
      this.router.navigateByUrl('/asset-details/view2');
    }else{
      
      this.router.navigateByUrl('/asset-details/view');

    }
  }
}
