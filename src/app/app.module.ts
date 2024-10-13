import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SaleService } from './core/services/sale.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthenticationInterceptor } from './core/interceptors/authentication.interceptor';
import { AuthenticationService } from './core/services/authentication.service';
import { FormSearchService } from './core/services/form-search.service';
import { FormService } from './core/services/form.service';
import { TestimonyService } from './core/services/testimony.service';
import { TokenService } from './core/services/token.service';
import { UfService } from './core/services/uf.service';
import { TicketsService } from './core/services/tickets.service';
import { AirlineService } from './core/services/airline.service';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeModule
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
