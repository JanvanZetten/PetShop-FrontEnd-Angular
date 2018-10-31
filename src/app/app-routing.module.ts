import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PetComponent} from './pet/pet.component';
import {PetDetailComponent} from './pet-detail/pet-detail.component';
import {PetAddComponent} from './pet-add/pet-add.component';
import {PetUpdateComponent} from './pet-update/pet-update.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetComponent},
  { path: 'pets/:id', component: PetDetailComponent},
  { path: 'pet-add', component: PetAddComponent}
  { path: 'pet-update/:id', component: PetUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
