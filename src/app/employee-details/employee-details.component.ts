import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  public employee:any = [];

  constructor(private _employeeDetails:EmployeeService){}

  ngOnInit(){
    this.employee = this._employeeDetails.getemployee();
  }

}
