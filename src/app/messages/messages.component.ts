import { Component, OnInit } from '@angular/core';
import {Message} from '../mesaj';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  
  mesaj1:Message= {
    content:'caca',
    name:'pisat'
  };
  
  mesaj2:Message= {
    content:'mapis',
    name:'macac'
  };
  
  mesaje:Message[]=[this.mesaj1,this.mesaj2];

  constructor() { }

  ngOnInit(): void {
  }

}
