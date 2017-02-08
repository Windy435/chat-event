import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import { SelectRoomComponent } from './select.room.component';
import { ChatMessageFormComponent } from './chat-message-form.component';
import { ChatMessageListComponent } from './chat-message-list.component';
import { ChatMessageComponent } from './chat-message.component';
import { NameListService } from '../shared/name-list/index';
import { ChatMessagesService } from '../services/chat-messages.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ChatComponent,
    SelectRoomComponent, ChatMessageFormComponent, ChatMessageListComponent, ChatMessageComponent],
  exports: [ChatComponent, SelectRoomComponent, ChatMessageFormComponent, ChatMessageListComponent, ChatMessageComponent],
  providers: [NameListService, ChatMessagesService]
})
export class ChatModule { }
