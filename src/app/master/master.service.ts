import { Injectable } from "@angular/core";

import {Master} from './master.model'

@Injectable()
export class MasterService{

    data:Master = new Master(null, null);

    setId(nilai: number){
        this.data.id = nilai;
    }
    setNama(nilai: string){
        this.data.nama = nilai;
    }
}