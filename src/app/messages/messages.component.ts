import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Message} from '../mesaj';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages:Message[]=[];
  
  constructor(private messagesService:MessagesService) { }
  
  ngOnInit(): void {
    this.messagesService.getMessages()
      .subscribe(data=> this.messages=data);
  }

}
