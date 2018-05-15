import { Component, OnInit } from '@angular/core';
import {Master} from './master.model';
import {MasterService} from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  anggota:Master;

  constructor(private setService: MasterService){
    this.anggota = new Master();
  }

 ngOnInit(){
    this.setService.getAnggota().subscribe((dataRespon:Master)=>
    {this.anggota = dataRespon;
    });
  }

}
