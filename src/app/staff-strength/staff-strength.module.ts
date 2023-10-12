import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaffStrengthComponent } from './staff-strength.component';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './list/list.component';
import { StafSancComponent } from './staf-sanc/staf-sanc.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: 'staff-strength',
    component: StaffStrengthComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'staff-sanc', component: StafSancComponent }
    ]
  }
]


@NgModule({
  declarations: [StafSancComponent, ListComponent, StaffStrengthComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})

export class StaffStrengthModule { }
