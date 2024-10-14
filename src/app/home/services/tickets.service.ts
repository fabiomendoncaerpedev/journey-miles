import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Result, SearchData } from 'src/app/core/types/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class TicketsService {
  minPrice = 0;
  maxPrice = 0;
  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  getTickets(search: SearchData): Observable<Result> {
    const params = this.convertParamsToString(search);
    const obs = this.http.get<Result>(`${this.API}/passagem/search?${params}`);

    obs.pipe(
      take(1)
    ).subscribe(
      (response) => {
        this.minPrice = response.precoMin;
        this.maxPrice = response.precoMax;
      }
    );

    return obs;
  }

  convertParamsToString(search: SearchData) {
    return Object.entries(search).map(
      ([key, value]) => {
        return !value
          ? ''
          : `${key}=${value}`;
      }
    ).join('&');
  }
}
