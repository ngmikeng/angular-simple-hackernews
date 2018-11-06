import { Injectable } from '@angular/core';
import { Observable, of, from, forkJoin } from 'rxjs';
import { tap, catchError, mergeMap, concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MessageService } from './message.service';
import { IPost } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  private apiUrl: string = environment.api.baseUrl;
  postIds: number[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HomeService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HomeService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPostIds() {
    return this.postIds;
  }

  setPostIds(ids: number[]) {
    this.postIds = ids;
  }

  getIds(type: string = 'top'): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/${type}stories.json`)
      .pipe(
        tap((ids: number[]) => this.setPostIds(ids)),
        tap(_ => this.log(`getIds`)),
        catchError(this.handleError(`getIds`, []))
      );
  }

  getItems(ids: number[]): Observable<IPost> {
    return from(ids).pipe(
      mergeMap(id => <Observable<IPost>> this.http.get<IPost>(`${this.apiUrl}/item/${id}.json`))
    );
  }
}
