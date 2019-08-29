import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './employee.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees                                                                                                                                                                                                                                                                                                                                                           ;

  constructor(private empservice:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router) { 

  }

  ngOnInit() {
    let code:string=this.activatedRoute.snapshot.params["id"];
    this.employees=this.empservice.getEmployees().find(emp=>emp.code===code);
    
}

navigate()
{
  this.router.navigate(["/employees"]);
}

}
