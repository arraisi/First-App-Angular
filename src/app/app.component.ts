import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  employee: Employees[] = [];

  employees: Employees = new Employees();
}
export class Employees {
  constructor(public id?: number, public nama?: string) { }
}
