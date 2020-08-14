import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../models/category';
import { global } from './global';
import { Params } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators';






@Injectable()

export class CategoryService {

    public readonly apiUrl = environment.apiUrl;
    private categoriesUrl = this.apiUrl + 'categories';
    private categoriaUrl = this.apiUrl + 'post/' + 'categories';



    constructor(
        private _http: HttpClient
    ) {


    }




    create(token, category): Observable<any> {

        let json = JSON.stringify(category);
        let params = "json=" + json;

        let heders = new  HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.post(this.apiUrl + '/categories', params, { headers: heders });

    }




    obtenerCategorias(): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.categoriesUrl, { headers: headers })
        .pipe(
            catchError(error => this.handleError(error))
        );
    }


  



    obtenerCategoria(id: number): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.categoriesUrl + `/${id}`, { headers: headers })
            .pipe(
                catchError(error => this.handleError(error))
            );

    }








    getCategories(): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        return this._http.get(this.apiUrl + 'categories', { headers: headers })
        .pipe(
            catchError(error => this.handleError(error))
        );
    }


    getCategoy(id): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        return this._http.get(this.apiUrl + 'categories/' + id, { headers: headers })
        .pipe(
            catchError(error => this.handleError(error))
        );
    }


    getPosts(id): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        return this._http.get(this.apiUrl + 'post/category/' + id, { headers: headers })
        .pipe(
            catchError(error => this.handleError(error))
        );
    }

    /** Error handler */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side error.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend error.
            return throwError(error);
        }
        // return a custom error message
        return throwError('Something bad happened; please try again later.');
    }


}

