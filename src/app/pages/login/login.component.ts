import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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

  get email(): string {
    return this.loginForm.get('email').value;
  }

  get password(): string {
    return this.loginForm.get('email').value;
  }

  clearForm() {
    this.loginForm.reset();
  }

  onFormSubmit(): void {
    this.authService.emailLogin(this.email, this.password);
  }
}
