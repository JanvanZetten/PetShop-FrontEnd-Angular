import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Owner} from '../models/owner';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  ownerApiUrl = 'https://localhost:5001/api/owners';

  constructor(private http: HttpClient, private  authenticationService: AuthenticationService) { }

  private setOptions() {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
  }

  getOwners(): Observable<Owner[]> {
    this.setOptions();
    return this.http.get<Owner[]>(this.ownerApiUrl, httpOptions);
  }

  getOwner(id: number): Observable<Owner> {
    this.setOptions();
    return this.http.get<Owner>(this.ownerApiUrl + '/' + id, httpOptions);
  }

  AddOwner(owner: Owner): Observable<Owner> {
    this.setOptions();
    return this.http.post<Owner>(this.ownerApiUrl, owner, httpOptions);
  }

  UpdateOwner(owner: Owner): Observable<Owner> {
    this.setOptions();
    return this.http.put<Owner>(this.ownerApiUrl + '/' + owner.id, owner, httpOptions);
  }

  deleteOwner(id: number): Observable<Owner> {
    this.setOptions();
    return this.http.delete<Owner>(this.ownerApiUrl + '/' + id, httpOptions);
  }
}
