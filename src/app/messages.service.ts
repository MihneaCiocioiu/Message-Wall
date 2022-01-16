import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Message} from './mesaj';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  Url:string='http://localhost:3000/';

  getMessages():Observable<Message[]> {
    return this.http.get<Message[]>(this.Url+'get')
  }

  sendMessage(message:Message) {
    return this.http.post<Message>(this.Url+'post',message)
  }

  constructor(private http:HttpClient) { }

}
