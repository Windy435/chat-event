import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message';
import * as firebase from 'firebase';

@Injectable()
export class ChatMessagesService {

  constructor() { }

  getMessagesByRoomId(roomId: string) {
    let messagesRef = firebase.database().ref('/messages/' + roomId).limitToLast(10);
    messagesRef.on('child_added', function (data) {
      console.log(1 + data.key + " " + data.val());
    });
  }

  createNewMessage(roomId: string, newMessage: ChatMessage): any {
    newMessage.user = JSON.parse(localStorage.getItem('loggedUser')).auth.uid;
    newMessage.timestamp = new Date().toUTCString();
    return new Promise((resolve) => {
      let messagesRef = firebase.database().ref('/messages/' + roomId)
      messagesRef.push(newMessage).then(() => {
        resolve();
      });
    });
  }
}
