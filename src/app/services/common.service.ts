import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MockAPICountryList } from '../../data/model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  countryUrl = `${environment.apiUrl}country.json`;
  
  constructor(private httpClient:HttpClient) {
    console.log(this.countryUrl)
   }
  
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getCountrys():Observable<MockAPICountryList>{
    return this.httpClient.get<MockAPICountryList>(this.countryUrl).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}