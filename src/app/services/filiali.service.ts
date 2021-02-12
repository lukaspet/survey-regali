import { Filiale } from './../filiale/filiale';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilialiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute( envAddress: string) {
    return `${envAddress}/filiale`;
  }
  /** GET: get categories from server */
  getFiliale(): Observable<Filiale[]> {
    return this.http.get<Filiale[]>(this.createCompleteRoute(this.envUrl.urlAddress))
    .pipe(
      catchError(this.handleError<Filiale[]>('getFiliale', [])));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
