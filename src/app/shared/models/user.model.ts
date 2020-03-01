import {UserInterface} from '../interfaces';

export class UserModel {
  private chat_rooms: string[];
  private uid: string;
  private first_name: string;
  private last_name: string;

  public email: string;
  public username: string;
  public status: string;
  public contacts: string[];
  public avatarUrl: string;

  constructor(data: UserInterface) {
      this.uid = data.uid;
      this.email = data.email;
      this.username = data.username;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.status = data.status;
      this.contacts = data.contacts;
      this.chat_rooms = data.chat_rooms;
      this.avatarUrl = !data.avatarUrl ? '' : data.avatarUrl;
  }

  get firstName(): string {
    return this.first_name;
  }

  set firstName(value: string) {
    this.first_name = value;
  }

  get lastName(): string {
    return this.last_name;
  }

  set lastName(value: string) {
    this.last_name = value;
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
