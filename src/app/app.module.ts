import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './Pet/pet-list/pet.component';
import { PetDetailComponent } from './Pet/pet-detail/pet-detail.component';
import { PetAddComponent } from './Pet/pet-add/pet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PetUpdateComponent } from './Pet/pet-update/pet-update.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnerListComponent } from './Owner/owner-list/owner-list.component';
import { OwnerDetailComponent } from './Owner/owner-detail/owner-detail.component';
import { OwnerAddComponent } from './Owner/owner-add/owner-add.component';
import { OwnerUpdateComponent } from './Owner/owner-update/owner-update.component';
import {AuthenticationService} from './shared/service/authentication.service';
import { LoginComponent } from './login/login.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PetComponent,
    PetDetailComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerListComponent,
    OwnerDetailComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
