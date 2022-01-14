import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messsage-box',
  templateUrl: './messsage-box.component.html',
  styleUrls: ['./messsage-box.component.scss']
})
export class MesssageBoxComponent implements OnInit {

  name?:string;
  content?:string;

  getValues(name:string, content:string):void {
    this.name=name;
    this.content=content;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
