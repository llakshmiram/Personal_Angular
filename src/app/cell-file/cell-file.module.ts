import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CellFileComponent } from './cell-file.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [

  {
    path: 'cell-file',
    component: CellFileComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  }
]

@NgModule({
  declarations: [CellFileComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class CellFileModule { }
