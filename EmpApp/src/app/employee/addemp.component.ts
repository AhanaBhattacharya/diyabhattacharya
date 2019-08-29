import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private empservice:EmployeeService,private route:Router) { }

  ngOnInit() {
  }
  onSubmit(employee:Employee)
  {
    this.empservice.addemployee(employee);
     this.route.navigate(['/employees']);
  }

}
