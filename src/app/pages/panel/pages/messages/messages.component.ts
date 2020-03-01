import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  private activatedRouteSubscription: Subscription;
  public user;

  constructor(
    private  router: Router,
    private  activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activateRoute.parent.data.subscribe((data: Data) => {
      if (!data) {
        this.router.navigate(['/error'])
          .finally();
      }

      this.user = data.data;
    });
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }
}
