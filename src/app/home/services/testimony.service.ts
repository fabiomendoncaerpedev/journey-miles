import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimony } from 'src/app/core/types/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class TestimonyService {

  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<Testimony>> {
    return this.http.get<Array<Testimony>>(`${this.API}/depoimentos`);
  }

}
