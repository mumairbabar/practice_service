import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getemployee(){
    return [
      {"id":1,"name":"Umair",  "Role":"RPA"},
      {"id":2,"name":"Sarmad", "ROle":"Extractor"},
      {"id":3,"name":"Tahir",  "Role":"Backend"},
      {"id":4,"name":"Burhan", "ROle":"Frontend"}
    ]
  }

  constructor() { }
}
