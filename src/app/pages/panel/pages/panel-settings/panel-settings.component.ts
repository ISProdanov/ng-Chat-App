import {Component} from '@angular/core';
import {PanelSettingsPathsEnum} from '../../../../shared/enums';
import {UserModel} from '../../../../shared/models';
import {UsersService} from '../../../../shared/services';


@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent {
  public panelSettingsPathsEnum: typeof PanelSettingsPathsEnum;
  public user: UserModel;

  constructor(
    private usersService: UsersService
  ) {
    this.panelSettingsPathsEnum = PanelSettingsPathsEnum;

    // this.usersService.getFirebaseUser().then((user) => {
    //     this.user = user as UserModel;
    //   }
    // );
  }

  onFormSubmit() {
  }
}
