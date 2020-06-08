import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
// import { forkJoin } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  // zillow token
  ZWSID = environment.ZWSID;
  base_uri = environment.base_uri;
  constructor(private http: HttpClient) {}

  getPropertyData(address) {
    console.log(address);
    console.log(address.value);
    if (address.status === 'VALID') {
      console.log('valid FormGroup');
    }
    return new Observable();
    // return this.http.get(`${this.base_uri}?${this.ZWSID}&address=`).pipe(
    //   retry(2), // retry a failed request up to 3 times
    //   catchError(this.handleError) // then handle the error
    // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

// http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA
