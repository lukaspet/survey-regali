import { Response } from './../filiale/response';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute( envAddress: string) {
    return `${envAddress}/response`;
  }
  /** POST: add a new category to the server */
  addResponse(response: Response): Observable<Response> {
    return this.http.post<Response>(this.createCompleteRoute(this.envUrl.urlAddress), response, this.httpOptions).pipe(
      tap((newResponse: Response) => this.log(`added response w/ id=${newResponse.filialeId}`)),
      catchError(this.handleError<Response>('addResponse'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // if (error.status === 400) {
      //   this.notifier.notify('warning', error.error);
      // }
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a DocumentService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
