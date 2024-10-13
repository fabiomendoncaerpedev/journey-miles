import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { BannerComponent } from "./banner/banner.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { CounterComponent } from "./counter/counter.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { TicketComponent } from "../search/ticket/ticket.component";
import { MaterialModule } from "../core/material/material.module";

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    ModalComponent,
    CounterComponent,
    DropdownUfComponent,
    FormBaseComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    ModalComponent,
    CounterComponent,
    DropdownUfComponent,
    FormBaseComponent,
    TicketComponent
  ]
})
export class SharedModule {}
