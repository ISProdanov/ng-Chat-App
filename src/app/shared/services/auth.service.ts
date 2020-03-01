import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

import {AppPathsEnum} from '../enums';
import {UserInputModel} from '../models';

@Injectable()
export class AuthService {
  private userDetails;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    afAuth.authState.subscribe(user => this.authUser = user);
  }

  private updateUserData(userCredentials): void {
    const path = `users/${userCredentials.user.uid}`;
    const data = new UserInputModel(
      userCredentials.user.uid,
      userCredentials.user.email,
      'online',
      [null],
      ['everyone'],
    );

    this.db.object(path).update(data)
      .catch(error => {
        console.error('Ooops something went wrong:', error.message);

        this.router.navigate([AppPathsEnum.Error])
          .finally();
      });
  }

  /**
   * Email and Password Auth
   */

  emailSignUp(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.updateUserData(user);
      })
      .catch(error => {
        console.error('Something is wrong:', error.message);

        this.router.navigate([AppPathsEnum.Error])
          .finally();
      });
  }

  emailLogin(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/panel'])
          .finally();
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

  signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/'])
        .finally();
    });
  }

  get authUser() {
    return this.userDetails;
  }

  set authUser(value) {
    this.userDetails = value;
  }

}
