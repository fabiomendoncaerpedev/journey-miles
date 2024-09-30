import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Testimony } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<Testimony>> {
    return this.http.get<Array<Testimony>>(`${this.API}/depoimentos`);
  }

}
