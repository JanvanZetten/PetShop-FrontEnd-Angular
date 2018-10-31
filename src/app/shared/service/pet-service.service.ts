import { Injectable } from '@angular/core';
import {Pet} from '../../models/pet';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  nextId = 1;

  petItems: Pet[] = [
    {id: this.nextId++, name: 'Fiddo', birthday: new Date(), price: 2000.2, type: 1 },
    {id: this.nextId++, name: 'Fiddoline', birthday: new Date(), price: 2000.2, type: 1 },
    {id: this.nextId++, name: 'Hans', birthday: new Date(), price: 0.2, type: 2 },
    {id: this.nextId++, name: 'Erik', birthday: new Date(), price: 20, type: 3 },
    {id: this.nextId++, name: 'Ole', birthday: new Date(), price: 200, type: 4 }
  ];
  constructor() { }

  getPets(): Pet[] {
    return this.petItems;
  }

  getPet(id: number): Pet {

    for (const pet of this.petItems) {
      if (pet.id === id) {
        return pet;
      }
    }
    return null;

  }

  addPet(pet: Pet) {
    pet.id = this.nextId++;
    this.petItems.push(pet);
  }

  UpdatePet(pet: Pet) {
    for (let petItem of this.petItems){
      if (petItem.id === pet.id){
        petItem = pet;
        break;
      }
    }
  }
}
