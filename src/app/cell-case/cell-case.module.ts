import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CellCaseComponent } from './cell-case.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

const routes: Routes = [

  {
    path: 'cell-case',
    component: CellCaseComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent },
      { path: 'view2', component: View2Component },
      { path: 'view3', component: View3Component },
      { path: 'view4', component: View4Component }
    ]
  }
]

@NgModule({
  declarations: [CellCaseComponent, ViewComponent, ListComponent, View2Component, View3Component, View4Component],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class CellCaseModule { }
