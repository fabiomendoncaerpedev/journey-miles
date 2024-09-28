import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API}/auth/login`, { email: email, senha: password });
  }
}
