import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message';
import * as firebase from 'firebase';

@Component({
  moduleId: module.id,
  selector: 'fc-chat-message-list',
  templateUrl: 'chat-message-list.component.html'
})
export class ChatMessageListComponent implements OnInit, OnChanges {
  @Input() roomId: string;
  messages: any [] = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    let currentRoomID = '';
    for (let propName in changes) {
      let change = changes[propName];
      currentRoomID = change.currentValue;
    }
    let messages: any[] = [];
    let messagesRef = firebase.database().ref('/messages/' + currentRoomID).limitToLast(10);
    messagesRef.on('child_added', function (data) {
      messages.push({
        key: data.key,
        message: data.val().message,
        timestamp: data.val().timestamp,
        user: data.val().user
      });
    });
    this.messages = messages;
  }
}
