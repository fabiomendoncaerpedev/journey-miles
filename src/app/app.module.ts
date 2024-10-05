import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { SaleService } from './core/services/sale.service';
import { ContainerComponent } from './shared/container/container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { CardSearchComponent } from './shared/card-search/card-search.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CardTestimonyComponent } from './shared/card-testimony/card-testimony.component';
import { FormSearchComponent } from './shared/form-search/form-search.component';
import { CounterComponent } from './shared/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthenticationInterceptor } from './core/interceptors/authentication.interceptor';
import { AuthenticationService } from './core/services/authentication.service';
import { FormSearchService } from './core/services/form-search.service';
import { FormService } from './core/services/form.service';
import { TestimonyService } from './core/services/testimony.service';
import { TokenService } from './core/services/token.service';
import { UfService } from './core/services/uf.service';
import { SearchComponent } from './pages/search/search.component';
import { TicketsService } from './core/services/tickets.service';
import { TicketComponent } from './shared/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardComponent,
    CardSearchComponent,
    CardTestimonyComponent,
    FormSearchComponent,
    ModalComponent,
    CounterComponent,
    DropdownUfComponent,
    LoginComponent,
    FormBaseComponent,
    RegisterComponent,
    PerfilComponent,
    SearchComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
