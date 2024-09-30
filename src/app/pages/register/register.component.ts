import { FormService } from './../../core/services/form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private formService: FormService
  ) {}

  register() {
    const registerForm = this.formService.getForm();

    console.log('register successufuly', registerForm);
  }
}
