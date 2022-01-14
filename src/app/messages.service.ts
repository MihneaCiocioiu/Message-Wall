import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Message} from './mesaj';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  Url:string='https://raw.githubusercontent.com/MihneaCiocioiu/Message-Wall/master/db.json';

  getMessages():Observable<Message[]> {
    return this.http.get<Message[]>(this.Url)
  }


  // getMessages():Observable<Message[]> {
  //   return this.http.get<Message[]>(this.Url)
  // }

  constructor(private http:HttpClient) { }

}
