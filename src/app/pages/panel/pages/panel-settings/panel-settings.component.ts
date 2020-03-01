import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {Subscription} from 'rxjs';

import {UserModel} from '../../../../shared/models';


@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent implements OnInit, OnDestroy {
  private activatedRouteSubscription: Subscription;
  public hiddenForm: boolean;
  public formType: string;
  public user: UserModel;

  constructor(
    private  router: Router,
    private  activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.hiddenForm = true;
    this.formType = null;

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

  toggleForm(formType: string): void {
    this.hiddenForm = !this.hiddenForm;

    this.formType = formType;
  }

  checkType(formType): boolean {
    return !this.hiddenForm && this.formType && this.formType === formType;
  }

  onFormSubmit(): void {

  }
}
