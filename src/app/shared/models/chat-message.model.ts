import {ChatMessageInterface} from "../interfaces";

export class ChatMessageModel {
  private from_user: string;
  private time_stamp: string;

  public message: string;

  constructor(data: ChatMessageInterface) {
    this.from_user = data.from_user;
    this.message = data.message;
    this.time_stamp = data.time_stamp;
  }

  get fromUser(): string {
    return this.from_user;
  }

  set fromUser(value: string) {
    this.from_user = value;
  }

  get timeStamp(): string {
    return this.time_stamp;
  }

  set timeStamp(value: string) {
    this.time_stamp = value;
  }
}
