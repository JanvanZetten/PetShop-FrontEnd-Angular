import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Owner} from '../models/owner';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  ownerApiUrl = 'https://localhost:5001/api/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownerApiUrl);
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.ownerApiUrl + '/' + id);
  }

  AddOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.ownerApiUrl, owner);
  }
}
