import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {
  PetApiUrl = environment.apiUrl + '/pets';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  private setOptions() {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
  }

  getPets(): Observable<Pet[]> {
    this.setOptions();
    return this.http.get<Pet[]>(this.PetApiUrl, httpOptions);
  }

  getPet(id: number): Observable<Pet> {
    this.setOptions();
    return this.http.get<Pet>(this.PetApiUrl + '/' + id, httpOptions);
  }

  addPet(pet: Pet): Observable<Pet> {
    this.setOptions();
    return this.http.post<Pet>(this.PetApiUrl, pet, httpOptions);
  }

  updatePet(pet: Pet): Observable<Pet> {
    this.setOptions();
    return this.http.put<Pet>(this.PetApiUrl + '/' + pet.id, pet, httpOptions);
  }

  deleteCustomer(id: number): Observable<Pet> {
    this.setOptions();
    return this.http.delete<Pet>(this.PetApiUrl + '/' + id, httpOptions);
  }
}
