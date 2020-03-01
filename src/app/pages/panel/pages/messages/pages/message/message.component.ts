import {Component, Input, OnInit} from '@angular/core';

import {ChatMessageModel} from '../../../../../../shared/models';
import {ChatMessageInterface} from '../../../../../../shared/interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public messageModel: ChatMessageModel;

  @Input() public messageInterface: ChatMessageInterface;

  constructor() {
  }

  ngOnInit() {
    this.messageModel = new ChatMessageModel(this.messageInterface);
  }

}
