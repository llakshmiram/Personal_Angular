import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NocDetailsComponent } from './noc-details.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [

  {
    path: 'noc-details',
    component: NocDetailsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent }
    ]
  }
]

@NgModule({
  declarations: [NocDetailsComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class NocDetailsModule { }
