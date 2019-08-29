import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  employees;

  constructor(private empservice:EmployeeService) { }

  ngOnInit() {
  }
search(data)
{
  this.employees=this.empservice.getEmployees().filter(emp=>emp.name===data.searchTerm);
}
}
