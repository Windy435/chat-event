import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fc-chat',
    templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
    roomId: string = 'room001';
    constructor() {}

    ngOnInit() {}

    onChangeRoom(roomId:string){
         this.roomId = roomId;
    }
}
