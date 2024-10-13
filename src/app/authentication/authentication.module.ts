import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    PerfilComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    PerfilComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
