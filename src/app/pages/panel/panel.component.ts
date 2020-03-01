import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {Subscription} from 'rxjs';

import {UserModel} from '../../shared/models';
import {PanelPathsEnum} from '../../shared/enums';
import {AuthService} from '../../shared/services';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  private activatedRouteSubscription: Subscription;

  public panelPathsEnum = PanelPathsEnum;
  public user: UserModel;

  constructor(
    private  router: Router,
    private  activateRoute: ActivatedRoute,
    private  authService: AuthService
  ) {
  }

  ngOnInit() {
    this.activateRoute.data.subscribe((data: Data) => {
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

  onLogout(): void {
    this.authService.signOut();
  }
}
