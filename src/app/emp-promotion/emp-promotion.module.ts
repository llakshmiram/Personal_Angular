import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpPromotionComponent } from './emp-promotion.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
// import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [

  {
    path: 'emp-promotion',
    component: EmpPromotionComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  }
]

@NgModule({
  declarations: [EmpPromotionComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]

})
export class EmpPromotionModule { }
