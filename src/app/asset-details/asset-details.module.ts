import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetDetailsComponent } from './asset-details.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';




const routes: Routes = [

  {
    path: 'asset-details',
    component: AssetDetailsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'view', component: ViewComponent },
      { path: 'view2', component: View2Component }
    ]
  }
]

@NgModule({
  declarations: [AssetDetailsComponent, ViewComponent, ListComponent, View2Component],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class AssetDetailsModule { }
