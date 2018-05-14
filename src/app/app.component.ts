import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  employee: Employees[] = [];

  employees: Employees = new Employees();
  
  kirimData(employees){
    console.log(this.employees);
    if(this.employees.id && this.employees.nama){
      this.employee.push(this.employees);
    }
    this.employees = new Employees();
  }
  
}
export class Employees{
  constructor(public id?: number, public nama?: string){}
}
