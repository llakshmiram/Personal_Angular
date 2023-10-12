import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpPayComponent } from './emp-pay.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [

  {
    path: 'emp-pay',
    component: EmpPayComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  }
]

@NgModule({
  declarations: [EmpPayComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class EmpPayModule { }
