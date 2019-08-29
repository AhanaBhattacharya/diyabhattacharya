import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { HomeComponent } from './employee/home.component';
import { AddempComponent } from './employee/addemp.component';
import { EmployeeService } from './employee/employee.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import{FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { SearchEmployeeComponent } from './employee/search-employee.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    AddempComponent,
    EmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
