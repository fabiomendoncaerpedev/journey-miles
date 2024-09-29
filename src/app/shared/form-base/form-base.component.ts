import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UF } from 'src/app/core/types/uf';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  formBase!: FormGroup;
  stateControl = new FormControl<UF | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder
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
  }
}
