import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Category } from '../models/category';
import { Post } from '../models/post';
import { global } from './global';
import { Params } from '@angular/router';



@Injectable()
export class PostService {
    public readonly apiUrl = environment.apiUrl;
    public token;

    constructor(

        private _http: HttpClient
    ) { }


    create(token, post): Observable<any> {

        post.content=global.htmlEntities(post.content);
        let json = JSON.stringify(post);
        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.post(this.apiUrl + 'post', params, { headers: headers });

    }


    getPosts(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.apiUrl + 'post', { headers: headers });
    }


    getImagepost(): Observable<any> {
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return this._http.get(this.apiUrl + 'post/image', { headers: headers });
        }



    getPost(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.apiUrl + 'post/' + id, { headers: headers });
    }


    update(token, post, id): Observable<any> {

        post.content=global.htmlEntities(post.content);
        let json = JSON.stringify(post);
        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.put(this.apiUrl + 'post/' + id, params, { headers: headers });
    }


    delete(token, id) {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);

        return this._http.delete(this.apiUrl + 'post/' + id, { headers: headers });
    }


}
