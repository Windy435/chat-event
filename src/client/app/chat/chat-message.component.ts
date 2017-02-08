import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Component({
  moduleId: module.id,
  selector: 'fc-chat-message',
  templateUrl: 'chat-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent {
  @Input() message: ChatMessage;
}
