import { Component, OnInit, Input } from '@angular/core';
import {Master} from '../master/master.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @Input('nilai')
  daftar:Master;

  constructor() { }

  ngOnInit() {
  }

}
