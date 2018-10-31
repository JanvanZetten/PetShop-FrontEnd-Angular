import { Component, OnInit } from '@angular/core';
import {Pet} from '../models/pet';
import {PetServiceService} from '../shared/service/pet-service.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    birthday: new FormControl(''),
    price: new FormControl('')
  });

  pet: Pet;

  constructor(private petService: PetServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pet = this.petService.getPet(id);
  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.pet.id;
    this.petService.UpdatePet(pet);
  }
}
