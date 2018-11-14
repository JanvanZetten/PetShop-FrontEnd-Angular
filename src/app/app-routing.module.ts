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
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guard/auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetComponent, canActivate: [AuthGuard]},
  { path: 'pets/detail/:id', component: PetDetailComponent, canActivate: [AuthGuard]},
  { path: 'pets/add', component: PetAddComponent, canActivate: [AuthGuard]},
  { path: 'pets/update/:id', component: PetUpdateComponent, canActivate: [AuthGuard]},
  { path: 'owners', component: OwnerListComponent, canActivate: [AuthGuard]},
  { path: 'owners/detail/:id', component: OwnerDetailComponent, canActivate: [AuthGuard]},
  { path: 'owners/add', component: OwnerAddComponent, canActivate: [AuthGuard]},
  { path: 'owners/update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
