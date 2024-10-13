import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "../pages/search/search.component";
import { BannerComponent } from "./banner/banner.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { CounterComponent } from "./counter/counter.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { AirlinesComponent } from "./form-search/complementary-filters/airlines/airlines.component";
import { ComplementaryFiltersComponent } from "./form-search/complementary-filters/complementary-filters.component";
import { LabelComponent } from "./form-search/complementary-filters/label/label.component";
import { PricesComponent } from "./form-search/complementary-filters/prices/prices.component";
import { StopsComponent } from "./form-search/complementary-filters/stops/stops.component";
import { FormSearchComponent } from "./form-search/form-search.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { TicketComponent } from "./ticket/ticket.component";
import { MaterialModule } from "../core/material/material.module";

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    FormSearchComponent,
    ModalComponent,
    CounterComponent,
    DropdownUfComponent,
    FormBaseComponent,
    SearchComponent,
    TicketComponent,
    AirlinesComponent,
    LabelComponent,
    ComplementaryFiltersComponent,
    PricesComponent,
    StopsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    FormSearchComponent,
    ModalComponent,
    CounterComponent,
    DropdownUfComponent,
    FormBaseComponent,
    SearchComponent,
    TicketComponent,
    AirlinesComponent,
    LabelComponent,
    ComplementaryFiltersComponent,
    PricesComponent,
    StopsComponent
  ]
})
export class SharedModule {}
