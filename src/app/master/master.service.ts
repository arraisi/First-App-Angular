import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {Master} from './master.model'

@Injectable()
export class MasterService{

    constructor(private _http: HttpClient){}

    getAnggota(){
        return this._http.get('/api/anggota/1');
    }

    getAllAnggota(){
        return this._http.get('/api/anggota/list')
    }

 
}