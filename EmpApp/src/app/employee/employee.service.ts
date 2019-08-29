import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Employee } from './employee';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

employees:Employee[];
populateEmployees():Observable<Employee[]>
{
 return  this.http.get<Employee[]>("../../assets/employee.json");
}
  constructor(private http:HttpClient) {  
    this.populateEmployees().subscribe(data=>this.employees=data,error=>console.log(error));
  }
  getEmployees():Employee[]
  {
return this.employees;
  }
  addemployee(employee:Employee)
  {
    this.employees.push(employee);
    return this.getEmployees();
  }
  deleteEmployee(code)
  {
this.employees=this.employees.filter(emp=>emp.code!=code);
  }
  
}
