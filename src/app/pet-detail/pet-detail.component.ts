import { Component, OnInit } from '@angular/core';
import {PetServiceService} from '../shared/service/pet-service.service';
import {Pet} from '../models/pet';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;

  constructor(private petService: PetServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pet = this.petService.getPet(id);
  }

  delete() {
    this.petService.deleteCustomer(this.pet.id);
    this.router.navigateByUrl('/pets');
  }

}
