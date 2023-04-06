import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public employeeList:any = [];
  constructor(private _employeeDetails:EmployeeService){}

  ngOnInit(){
    this.employeeList = this._employeeDetails.getemployee();
  }
}
