export class ChatMessageInputModel {
  private from_user: string;
  private time_stamp: string;

  public message: string;

  constructor(
    from_user: string,
    message: string,
    time_stamp: string
  ) {
    this.from_user = from_user;
    this.message = message;
    this.time_stamp = time_stamp;
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
