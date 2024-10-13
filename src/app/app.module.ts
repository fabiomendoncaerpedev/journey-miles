import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SaleService } from './core/services/sale.service';
import { AppComponent } from './app.component';
import { AuthenticationInterceptor } from './authentication/interceptors/authentication.interceptor';
import { AuthenticationService } from './authentication/services/authentication.service';
import { FormSearchService } from './core/services/form-search.service';
import { FormService } from './core/services/form.service';
import { TokenService } from './authentication/services/token.service';
import { UfService } from './core/services/uf.service';
import { AirlineService } from './core/services/airline.service';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { TestimonyService } from './home/services/testimony.service';
import { TicketsService } from './home/services/tickets.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeModule,
    AuthenticationModule
  ],
  providers: [
    SaleService,
    AuthenticationService,
    FormSearchService,
    FormService,
    TestimonyService,
    TokenService,
    UfService,
    TicketsService,
    AirlineService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
