import { Component, OnInit } from '@angular/core';
import {Master} from './master.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent {
  data: Master[]=[];

  getData(data){
    this.data.push(data);
  }

}
