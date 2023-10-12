import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpTenureComponent } from './emp-tenure.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';


const routes: Routes = [

  {
    path: 'emp-tenure',
    component: EmpTenureComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  }
]

@NgModule({
  declarations: [EmpTenureComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class EmpTenureModule { }
