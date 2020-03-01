import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import {AuthService} from './auth.service';
import {UserModel} from '../models';
import {DataSnapshot} from '@angular/fire/database/interfaces';
import {UserInterface} from '../interfaces';

import {Observable, of} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersList: FirebaseListObservable<UserModel[]>;
  private firebaseDatabase;
  private authUser: firebase.User;

  public user: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.authUser = null;
      }

      this.authUser = user;
    });
  }

  getUser(): Observable<Promise<UserModel | void>> {
    return of (firebase.database().ref('users/' + this.authUser.uid)
      .once('value')
      .then((snapshot: DataSnapshot) => {
        if (snapshot.val()) {
          this.user = new UserModel(snapshot.val() as UserInterface);
        }
      })
    );
  }
}
