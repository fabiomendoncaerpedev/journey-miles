import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Sale } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable()
export class SaleService {

  private apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<Sale>> {
    return this.http.get<Array<Sale>>(`${this.apiURL}/promocoes`);
  }
}
