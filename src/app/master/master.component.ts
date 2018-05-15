import { Component, OnInit } from '@angular/core';
import {Master} from './master.model';
import {MasterService} from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  allAnggota:Master[];

  constructor(private setService: MasterService){
    this.allAnggota = [];
  }

 ngOnInit(){
    this.setService.getAllAnggota().subscribe((dataRespon:Master[])=>
    {this.allAnggota = dataRespon; 
    });
  }

}
