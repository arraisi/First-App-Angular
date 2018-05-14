import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Master } from '../master/master.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  @Output()
  submited = new EventEmitter<Master>();

  value: Master;

  OnInit() {
    this.value = new Master(null, null);
  }
  
  kirimData(data){
    console.log(this.value);
    this.value = new Master(null, null);
    if(this.value.id && this.value.nama){
      this.submited.emit(this.value);
    }
  }

}
