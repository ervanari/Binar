import { Injectable } from '@angular/core';
import { Employee, EmployeeDetail } from '../interface/employee';
import { LocalService } from './local.service';

const employees: EmployeeDetail = {
  id: 0,
  username: "vanramnit",
  firstName: "van",
  lastName: "ramnit",
  email: "vanramnit@gmail.com",
  birthDate: "20-01-1996",
  basicSalary: 5000000,
  status: "Contact",
  group: "group",
  description: "Frontend Developer"
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public keyEmployee: string = "dsEmployees";

  constructor(private localService: LocalService) { 
    if (this.getDataStore() == null) {
      this.setDataStore();
    }
  }

  setDataStore() {
    let dataLength: number = 100;
    let arrData: EmployeeDetail[] = [];

    for (let i = 0; i < dataLength; i++) {
      let objData: EmployeeDetail = { 
        id: employees.id += 1,
        username: employees.username + employees.id,
        firstName: employees.firstName + employees.id,
        lastName: employees.lastName + employees.id,
        email: employees.email + employees.id,
        birthDate: employees.birthDate,
        basicSalary: employees.basicSalary += employees.id,
        status: employees.status + employees.id,
        group: employees.group + ' ' + employees.id,
        description: employees.description + employees.id
      }
      arrData.push(objData);
    }
    this.localService.saveData(this.keyEmployee, JSON.stringify(arrData));
  }

  getDataStore() {
    return JSON.parse(this.localService.getData(this.keyEmployee));
  }
}
