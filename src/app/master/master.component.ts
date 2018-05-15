import { Component, OnInit } from '@angular/core';
import {Master} from './master.model';
import {MasterService} from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  data: Master[]=[];
  currentValue: Master;

  constructor(private setService: MasterService){}

  getData(data){
    //this.currentValue = data; //if not use setService from ./master.service
    this.setService.setId(data.id);
    this.setService.setNama(data.nama);
    console.log(this.setService.data);
    this.data.push(data);
  }

  ngOnInit(){
    this.currentValue = this.setService.data;
    this.setService.getAnggota().subscribe(data=>
    {console.log(data)})
  }

}
