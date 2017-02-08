import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  moduleId: module.id,
  selector: 'fc-select-room',
  templateUrl: 'select.room.component.html'
})
export class SelectRoomComponent implements OnInit {
  //rooms: FirebaseListObservable<any>;
  rooms: any[] = [];
  @Output() onChangeRoom = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.rooms = [];
    let rooms: any = []
    let roomsRef = firebase.database().ref('/room_names');
    roomsRef.on('child_added', function (data) {
      rooms.push({ key: data.key, name: data.val().name, description: data.val().description });
    });
    this.rooms = rooms;
  }

  JoinRoom(roomKey: string) {
    this.onChangeRoom.emit(roomKey);
  }
}
