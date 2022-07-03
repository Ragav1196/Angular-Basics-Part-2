import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators'; /* 8 -> Import this to handle error */

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '../assets/data/employees.json';
  /* 3 -> Instead of backend api, i am using local file path */

  constructor(private http: HttpClient) {}
  /* 2 -> Import the HttpClient dependency */

  getEmployees(): Observable<
    IEmployee[]
  > /* 5 -> getEmployees method will return observable of type IEmployee  */ {
    return this.http
      .get<IEmployee[]>(
        /* 6 -> saying that the return response to be of specified interface type */ this
          ._url
      )
      .pipe(
        catchError(this.errorHandler)
      ); /* 9 -> for handling the error. if there is any error then that error will be passed as an 
        arguement in the subscribe metthod */
  }
 
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
