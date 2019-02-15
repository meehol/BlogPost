import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  private coreHttpOptions = {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
    },
  };

  constructor(
    private http: HttpClient,
  ) {}

  private mergeHttpOptions(customOptions: any) {
    const options = Object.assign({}, this.coreHttpOptions);
    if (customOptions) Object.assign(options, customOptions);
    return options;
  }

  public get<T>(url: string, customOptions?: any): Observable<T|HttpErrorResponse> {
    const options = this.mergeHttpOptions(customOptions);
    return this.http.get<T>(`${environment.apiUrl}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  public post<T>(url: string, body: any | null, customOptions?: any): Observable<T|HttpErrorResponse> {
    const options = this.mergeHttpOptions(customOptions);
    return this.http.post<T>(`${environment.apiUrl}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  public put<T>(url: string, body: any | null, customOptions?: any): Observable<T|HttpErrorResponse> {
    const options = this.mergeHttpOptions(customOptions);
    return this.http.put<T>(`${environment.apiUrl}${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  public delete<T>(url: string, customOptions?: any): Observable<T|HttpErrorResponse> {
    const options = this.mergeHttpOptions(customOptions);
    return this.http.delete<T>(`${environment.apiUrl}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles any http errors.
   * @param  {HttpErrorResponse} err: the error
   * @return {Observable<HttpErrorModel>} an observable error containing json conforming to HttpErrorModel interface
   */
  private handleError(err: HttpErrorResponse): Observable<HttpErrorResponse> {
    return of(err);
  }
}
