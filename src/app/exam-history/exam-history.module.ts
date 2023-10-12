import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamHistoryComponent } from './exam-history.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';


const routes: Routes = [
  {
    path: 'exam-history',
    component: ExamHistoryComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component:  ViewComponent},
      { path: 'view2', component:  View2Component},
      { path: 'view3', component:  View3Component}
    ]
  }
]
@NgModule({
  declarations: [ExamHistoryComponent, ListComponent,ViewComponent, View2Component, View3Component],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})

export class ExamHistoryModule { }
