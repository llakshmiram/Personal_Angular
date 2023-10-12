import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { AddeditEmpComponent } from './addedit-emp/addedit-emp.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeDetailsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddeditEmpComponent }
    ]
  }
]
@NgModule({
  declarations: [EmployeeDetailsComponent, ListComponent,AddeditEmpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class EmpDetModule { }
