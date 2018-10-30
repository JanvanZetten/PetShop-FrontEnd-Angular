import { Component, OnInit } from '@angular/core';
import {Pet} from '../models/pet';
import {PetServiceService} from '../shared/service/pet-service.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petItems: Pet[];

  constructor(private petService: PetServiceService) { }

  ngOnInit() {
    this.petItems = this.petService.getPets();
  }

}
