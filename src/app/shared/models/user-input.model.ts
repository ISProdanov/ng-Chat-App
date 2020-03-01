export class UserInputModel {
  private uid: string;
  private chat_rooms: string[];

  public email: string;
  public status: string;
  public contacts: string[];

  constructor(
    uid: string,
    email: string,
    status: string,
    contacts: string[],
    chat_rooms: string[]
  ) {
    this.uid = uid;
    this.email = email;
    this.status = status;
    this.contacts = !contacts ? [] : contacts;
    this.chat_rooms = !chat_rooms ? [] : chat_rooms;
  }

  get userId(): string {
    return this.uid;
  }

  set userId(value: string) {
    this.uid = value;
  }

  get chatRooms(): string[] {
    return this.chat_rooms;
  }

  set chatRooms(value: string[]) {
    this.chat_rooms = value;
  }
}
