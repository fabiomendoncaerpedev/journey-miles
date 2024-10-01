import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.API}/auth/cadastro`, userData);
  }
}
