import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from './splash-screen/splash-screen.module';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { HeadersComponent } from './headers/headers.component';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { ListComponent } from './emp-promotion/list/list.component';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './body/body.component';
import { CellFileModule } from './cell-file/cell-file.module';



// import { PersonComponent } from './family-details/person/person.component';



@NgModule({
  declarations: [
    AppComponent,SidenavComponent,HeadersComponent, BodyComponent],

  imports: [
   
    AppRoutingModule,
    BrowserAnimationsModule,
    SplashScreenModule,MaterialModule, MatInputModule,
    MatSelectModule, NgbModule, BrowserModule, MatIconModule, CellFileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
