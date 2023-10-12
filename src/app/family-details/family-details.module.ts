import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FamilyDetailsComponent } from './family-details.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';


const routes: Routes = [

  {
    path: 'family-details',
    component: FamilyDetailsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent },
      { path: 'person', component: PersonComponent }
    ]
  }
]

@NgModule({
  declarations: [FamilyDetailsComponent, ViewComponent, ListComponent, PersonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class FamilyDetailsModule { }
