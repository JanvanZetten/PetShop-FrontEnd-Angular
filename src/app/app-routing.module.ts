import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PetComponent} from './pet/pet.component';
import {PetDetailComponent} from './pet-detail/pet-detail.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetComponent}
  { path: 'pets/1', component: PetDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
