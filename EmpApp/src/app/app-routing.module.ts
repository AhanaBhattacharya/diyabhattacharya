import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { AddempComponent } from './employee/addemp.component';
import { HomeComponent } from './employee/home.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { SearchEmployeeComponent } from './employee/search-employee.component';
const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"add",component:AddempComponent},
  {path:"employee/:id",component:EmployeeComponent},
  {path:"search",component:SearchEmployeeComponent},
{path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
