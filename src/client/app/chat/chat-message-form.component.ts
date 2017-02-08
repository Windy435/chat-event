import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatMessagesService } from '../services/chat-messages.service';

@Component({
  moduleId: module.id,
  selector: 'fc-chat-message-form',
  templateUrl: 'chat-message-form.component.html'
})
export class ChatMessageFormComponent implements OnChanges {
  @Input() roomId: string;
  model: any = {};

  constructor(private _cs: ChatMessagesService) {
    this.model = {
      user: '',
      message: '',
      timestamp: ''
    }
  }

  saveMessage() {
    this._cs.createNewMessage(this.roomId, this.model);
  }

  ngOnChanges(changes: SimpleChanges) {
    let currentRoomID = '';
    for (let propName in changes) {
      let change = changes[propName];
      currentRoomID = change.currentValue;
    }

    this.roomId = currentRoomID;
  }
}
