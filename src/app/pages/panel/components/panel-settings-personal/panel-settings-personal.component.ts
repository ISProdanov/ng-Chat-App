import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../shared/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-panel-settings-personal',
  templateUrl: './panel-settings-personal.component.html',
  styleUrls: ['./panel-settings-personal.component.scss']
})
export class PanelSettingsPersonalComponent implements OnInit {
  public personalSettingsFormGroup: FormGroup;

  @Input() public user: UserModel;
  @Input() public formState: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.personalSettingsFormGroup = this.formBuilder.group({
      email: [
        '', [
          // Validators.pattern('[a-z0-9.@]*')
        ]
      ],
      password: [
        '', [
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ],
      newPassword: [
        '', [
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ],
      confirmNewPassword: [
        '', [
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ]
    });
  }

  onFormSubmit(): void {
  }

  clearForm(): void {
  }
}
