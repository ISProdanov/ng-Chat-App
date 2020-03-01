import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

import {UsersService} from './users.service';

import {ChatMessageInputModel} from '../models';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatMessages;

  constructor(
    private usersService: UsersService,
    private angularFireDatabase: AngularFireDatabase,
  ) {
  }

  sendMessage(userName: string, message: string, roomName?: string): void {
    const model = new ChatMessageInputModel(
      userName,
      message,
      environment.currentTimeLong
    );

    this.chatMessages = this.getMessages(!roomName ? 'everyone' : roomName);
    this.chatMessages.push(model);
  }

  getMessages(roomName?: string): AngularFireList<any> {
    return this.chatMessages = this.angularFireDatabase
      .list('/chat-rooms/' + !roomName ? 'everyone' : roomName + '/messages', ref => {
          return ref.limitToLast(25).orderByKey();
        }
      );
  }
}
