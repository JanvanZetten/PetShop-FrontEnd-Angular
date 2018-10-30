import { Injectable } from '@angular/core';
import {Pet} from '../../models/pet';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  petItems: Pet[] = [
    {id: 1, name: 'Fiddo', birthday: '2016-07-05T12:55:02.225255', price: 2000.2, type: 1 },
    {id: 2, name: 'Fiddoline', birthday: '2016-07-05T12:55:02.225255', price: 2000.2, type: 1 },
    {id: 3, name: 'Hans', birthday: '2016-07-05T12:55:02.225255', price: 0.2, type: 2 },
    {id: 4, name: 'Erik', birthday: '2016-07-05T12:55:02.225255', price: 20, type: 3 },
    {id: 5, name: 'Ole', birthday: '2016-07-05T12:55:02.225255', price: 200, type: 4 }
  ];
  constructor() { }

  getPets(): Pet[]{
    return this.petItems;
  }

  getPet(id: number): Pet{

    for(const pet of this.petItems){
      if (pet.id === id) {
        return pet;
      }
      return null;
    }

  }
}
