import {Component, Input, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {ChatService} from '../../../../../../shared/services';
import {UserModel} from '../../../../../../shared/models';

@Component({
  selector: 'app-feed',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  public feeds: Observable<any>;

  @Input() public user: UserModel;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.feeds = this.chatService.getMessages().valueChanges();
  }
}
