import { Message } from '../mesaj';
import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messsage-box',
  templateUrl: './messsage-box.component.html',
  styleUrls: ['./messsage-box.component.scss']
})
export class MesssageBoxComponent implements OnInit {

  name?:string;
  content?:string;

  currentMessage?:Message;

  sendValues(name:string, content:string):void {
    if (!name||!content) {
      alert("INVALID NAME OR MESSAGE!");
      return;
    }
    this.currentMessage= {
      content,
      name
    };
    this.messageService.getMessages();
    this.messageService.sendMessage(this.currentMessage)
      .subscribe();
  }

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
