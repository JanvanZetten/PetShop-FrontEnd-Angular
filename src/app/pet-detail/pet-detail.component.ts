import { Component, OnInit } from '@angular/core';
import {PetServiceService} from '../shared/service/pet-service.service';
import {Pet} from '../models/pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  id = 1;
  pet: Pet;

  constructor(private petService: PetServiceService) { }

  ngOnInit() {
    this.pet = this.petService.getPet(this.id);
  }

}
