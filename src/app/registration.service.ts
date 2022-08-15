import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private _url = '';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post<any>(this._url, userData);
  }
}
