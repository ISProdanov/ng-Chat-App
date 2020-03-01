import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../shared/services';
import {AppPathsEnum} from '../../shared/enums';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.signUpFormGroup = this.formBuilder.group({
      username: [
        '', [
          Validators.required
        ]
      ],
      email: [
        '', [
          Validators.required,
          // Validators.pattern('[a-z0-9.@]*')
        ]
      ],
      password: [
        '', [
          Validators.required,
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ]
    });

  }

  get username(): string {
    return this.signUpFormGroup.get('username').value;
  }

  get email(): string {
    return this.signUpFormGroup.get('email').value;
  }

  get password(): string {
    return this.signUpFormGroup.get('email').value;
  }

  clearForm() {
    this.signUpFormGroup.reset();
  }

  onFormSubmit(): void {
    this.authService.emailSignUp(this.email, this.password);
  }
}
