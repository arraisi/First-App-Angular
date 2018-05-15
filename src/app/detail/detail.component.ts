import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Master } from '../master/master.model';
import { MasterService } from '../master/master.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  constructor(private setService: MasterService){
    
  }


  @Output()
  submited = new EventEmitter<Master>();

  value: Master;

  ngOnInit() {
    this.value = new Master(null, null);
  }
  
  kirimData(data){
    console.log(this.value);
    if(this.value.id && this.value.nama){
      this.submited.emit(this.value);
      this.value = new Master(null, null);
    }
  }

}
