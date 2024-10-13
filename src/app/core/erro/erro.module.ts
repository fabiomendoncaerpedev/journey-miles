import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroRoutingModule } from './erro-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErroRoutingModule,
    SharedModule
  ]
})
export class ErroModule { }
