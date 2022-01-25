import { OptionsForm } from './../form/form.component';
import { Component } from '@angular/core';
import { ACTIONS } from '@shared/constants/constant';

@Component({
  selector: 'app-sign-in',
  template: ` <app-form [options]="options"></app-form> `,
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn,
  };
}
