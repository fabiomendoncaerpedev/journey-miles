import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormSearchComponent } from "./form-search/form-search.component";
import { SearchComponent } from "./search.component";
import { ComplementaryFiltersComponent } from "./form-search/complementary-filters/complementary-filters.component";
import { SharedModule } from "../shared/shared.module";
import { AirlinesComponent } from "./form-search/complementary-filters/airlines/airlines.component";
import { LabelComponent } from "./form-search/complementary-filters/label/label.component";
import { PricesComponent } from "./form-search/complementary-filters/prices/prices.component";
import { StopsComponent } from "./form-search/complementary-filters/stops/stops.component";
import { MaterialModule } from "../core/material/material.module";
import { SearchRoutingModule } from "./search-routing.module";

@NgModule({
  declarations: [
    SearchComponent,
    FormSearchComponent,
    ComplementaryFiltersComponent,
    AirlinesComponent,
    LabelComponent,
    PricesComponent,
    StopsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ],
  exports: [
    SearchComponent,
    FormSearchComponent,
    ComplementaryFiltersComponent,
    AirlinesComponent,
    LabelComponent,
    PricesComponent,
    StopsComponent
  ]
})
export class SearchModule {}
