import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class TicketsService {
  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  getTickets(search: any): Observable<Result> {
    const params = search;

    return this.http.get<Result>(`${this.API}/passagem/search`, { params });
  }


}
