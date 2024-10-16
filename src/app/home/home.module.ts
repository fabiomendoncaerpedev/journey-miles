import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { CardSearchComponent } from "src/app/shared/card-search/card-search.component";
import { CardTestimonyComponent } from "src/app/shared/card-testimony/card-testimony.component";
import { MaterialModule } from "src/app/core/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SearchModule } from "../search/search.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    CardSearchComponent,
    CardTestimonyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    SearchModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    CardSearchComponent,
    CardTestimonyComponent
  ]
})
export class HomeModule {}
