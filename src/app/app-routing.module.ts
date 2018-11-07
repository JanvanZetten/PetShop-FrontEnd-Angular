import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PetComponent} from './Pet/pet-list/pet.component';
import {PetDetailComponent} from './Pet/pet-detail/pet-detail.component';
import {PetAddComponent} from './Pet/pet-add/pet-add.component';
import {PetUpdateComponent} from './Pet/pet-update/pet-update.component';
import {OwnerListComponent} from './Owner/owner-list/owner-list.component';
import {OwnerDetailComponent} from './Owner/owner-detail/owner-detail.component';
import {OwnerAddComponent} from './Owner/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './Owner/owner-update/owner-update.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetComponent},
  { path: 'pets/:id', component: PetDetailComponent},
  { path: 'pet-add', component: PetAddComponent},
  { path: 'pet-update/:id', component: PetUpdateComponent},
  { path: 'owners', component: OwnerListComponent},
  { path: 'owners/:id', component: OwnerDetailComponent},
  { path: 'owner-add', component: OwnerAddComponent},
  { path: 'owner-update/:id', component: OwnerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
