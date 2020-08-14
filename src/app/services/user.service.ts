import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';
import { Params } from '@angular/router';





@Injectable()

export class UserService {

    public readonly apiUrl = environment.apiUrl;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ) {
     }


    test() {
        return 'Hola mundo desde un servicio';
    }


    register(user): Observable<any> {
let json = JSON.stringify(user);
let params = 'json=' + json;

let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

return this._http.post(this.apiUrl + 'user/register', params, {headers: headers});

    }

    signup( user, gettoken = null): Observable<any>{
        if(gettoken != null){
            user.gettoken = 'true';
        }

        let json = JSON.stringify( user);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl + 'user/login', params, {headers: headers});
    }


    update(token, user): Observable<any> {
        user.description = global.htmlEntities(user.decription);
        let json = JSON.stringify(user);
        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.put(this.apiUrl + 'user/update', params, {headers: headers});


    }




    getIdentity(){
            let identity = JSON.parse(localStorage.getItem('identity'));

            if(identity && identity != "undefined"){
                this.identity = identity;
            } else{
                this.identity = null;
            }
            return this.identity;
    }

    getToken(){

        let token = localStorage.getItem('token');

        if (token != "undefined" ){

            this.token = token;
        } else{
            this.token = null;
        }
        return this.token
    }

    getPost(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.apiUrl + 'post/user/' + id, { headers: headers });
    }

    getUser(id): Observable<any> {
        
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.apiUrl + 'user/detail/' + id, { headers: headers });
    }

}


