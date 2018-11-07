import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {
  PetApiUrl = 'https://localhost:5001/api/pets';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.PetApiUrl);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.PetApiUrl + '/' + id);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.PetApiUrl, pet);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.PetApiUrl + '/' + pet.id, pet);
  }

  deleteCustomer(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.PetApiUrl + '/' + id);
  }
}
