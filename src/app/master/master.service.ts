import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {Master} from './master.model'

@Injectable()
export class MasterService{

    data:Master = new Master(null, null);

    constructor(private _http: HttpClient){

    }

    getAnggota(){
        return this._http.get('api/anggota/1');
    }

    setId(nilai: number){
        this.data.id = nilai;
    }
    setNama(nilai: string){
        this.data.nama = nilai;
    }
}