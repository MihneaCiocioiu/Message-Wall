import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Message} from './mesaj';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  Url:String='localhost';

  options: {
    headers?: HttpHeaders 
    observe?: 'body'
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

  getMessages():Message {
    this.http.get(this.Url+':3000',)
  }

  constructor(private http:HttpClient) { }

}
