import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {DataSnapshot} from '@angular/fire/database/interfaces';
import {AngularFireDatabase} from '@angular/fire/database';

import {UserModel} from '../../../shared/models';
import {AuthService} from '../../../shared/services';
import {UserInterface} from '../../../shared/interfaces';

@Injectable()
export class PanelResolver implements Resolve<Promise<UserModel>> {
  private authUser;

  constructor(
    private authService: AuthService,
    private fireDatabase: AngularFireDatabase,
  ) {
    this.authUser = this.authService.authUser;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<UserModel> {
    return this.fireDatabase.database.ref('users/' + this.authUser.uid)
      .once('value')
      .then((snapshot: DataSnapshot) => {
        if (snapshot.val()) {
          return new UserModel(snapshot.val() as UserInterface);
        }
      });
  }
}
