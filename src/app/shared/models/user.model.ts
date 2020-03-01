import {UserInterface} from "../interfaces";

export class UserModel {
  private chat_rooms: string[];
  private uid: string;

  public email: string;
  public username: string;
  public status: string;
  public contacts: string[];

  constructor(data: UserInterface) {
      this.uid = data.uid;
      this.email = data.email;
      this.username = data.username;
      this.status = data.status;
      this.contacts = data.contacts;
      this.chat_rooms = data.chat_rooms;
  }

  get chatRooms(): string[] {
    return this.chat_rooms;
  }

  set chatRooms(value: string[]) {
    this.chat_rooms = value;
  }

  get userId(): string {
    return this.uid;
  }

  set userId(value: string) {
    this.uid = value;
  }
}
