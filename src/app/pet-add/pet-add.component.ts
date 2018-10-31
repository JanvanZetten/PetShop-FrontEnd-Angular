import { Component, OnInit } from '@angular/core';
import {PetServiceService} from '../shared/service/pet-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    birthday: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private petService: PetServiceService,
              private router: Router) { }


  ngOnInit() {

  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet);
    this.petForm.reset();
    this.router.navigateByUrl('/pets');
  }

}
