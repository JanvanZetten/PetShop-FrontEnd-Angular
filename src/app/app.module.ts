import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PetUpdateComponent } from './pet-update/pet-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PetComponent,
    PetDetailComponent,
    PetAddComponent,
    PetUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
