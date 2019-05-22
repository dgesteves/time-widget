import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class HttpService {
  private url = '../assets/data.json';

  constructor( private http: HttpClient ) { }

  static errorHandler( error: HttpErrorResponse ) {
    return throwError( error.message || 'server Error' );
  }

  getData(): Observable<Widget> {
    return this.http.get<Widget>( this.url ).pipe(
      catchError( HttpService.errorHandler ) );
  }
}
