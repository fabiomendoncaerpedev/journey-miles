import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UF } from 'src/app/core/types/uf';
import { FormService } from './../../core/services/form.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  @Input('is-perfil-component') isPerfilComponent!: boolean;
  @Output('click-action') clickAction: EventEmitter<any> = new EventEmitter();

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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      gender: ['outro'],
      phone: [null, Validators.required],
      state: this.stateControl,
      confirmEmail: [null, [Validators.required, Validators.email]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3)]],
      acceptTerms: [null, [Validators.requiredTrue]]
    });

    this.formService.setForm(this.formBase);
  }

  executeAction() {
    this.clickAction.emit(this.formBase.getRawValue());
  }
}
