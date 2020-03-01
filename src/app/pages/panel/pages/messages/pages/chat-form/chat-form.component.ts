import {Component, Input, OnInit} from '@angular/core';

import {ChatService} from '../../../../../../shared/services';
import {UserModel} from '../../../../../../shared/models';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  public message: string;

  @Input() public user: UserModel;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  handleSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onFormSubmit();
    }
  }

  onFormSubmit() {
    this.chatService.sendMessage(this.user.username, this.message);
    this.message = '';
  }
}
