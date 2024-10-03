import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UF } from 'src/app/core/types/types';
import { FormService } from './../../core/services/form.service';
import { FormValidations } from '../validators/form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  @Input('is-perfil-component') isPerfilComponent: boolean = false;
  @Input('title') title: string = 'Crie sua Conta';
  @Input('buttonText') buttonText = 'CADASTRAR';
  @Output('click-action') clickAction: EventEmitter<any> = new EventEmitter();
  @Output('logout') logout: EventEmitter<any> = new EventEmitter();

  formBase!: FormGroup;
  stateControl = new FormControl<UF | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.formBase = this.formBuilder.group({
      name: [null, Validators.required],
      bornDate: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      city: [null, Validators.required],
      gender: ['outro'],
      phone: [null, Validators.required],
      state: this.stateControl,
      email: [null, [Validators.required, Validators.email]],
      confirmEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('password')]],
      acceptTerms: [null, [FormValidations.required(this.isPerfilComponent)]]
    });

    this.formService.setForm(this.formBase);
  }

  executeAction() {
    this.clickAction.emit(this.formBase.getRawValue());
  }

  emitLogout() {
    this.logout.emit();
  }
}
