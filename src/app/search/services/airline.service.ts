import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../../core/types/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class AirlineService {

  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<Airline>> {
    return this.http.get<Array<Airline>>(`${this.API}/companhias`);
  }
}
