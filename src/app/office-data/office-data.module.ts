import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OfficeDataComponent } from './office-data.component';
import { CreateOfficeDataComponent } from './create-office-data/create-office-data.component';
import { ListOfficeDataComponent } from './list-office-data/list-office-data.component';
import { MaterialModule } from '../material.module';

// const routes: Routes = [
//   {
//     path: 'office-data',
//     component: OfficeDataComponent,

//     children: [
//       { path: 'list', component: ListOfficeDataComponent },
//     ]
//   },
// ];

const routes: Routes = [
  {
    path: 'office-data',
    component: OfficeDataComponent,
    children: [
      { path: 'list', component: ListOfficeDataComponent },
      { path:'create', component: CreateOfficeDataComponent}
      
    ]
  }
]

@NgModule({
  declarations: [OfficeDataComponent, ListOfficeDataComponent, CreateOfficeDataComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes), 
    ReactiveFormsModule
    
  ],
})
export class OfficeModule {}