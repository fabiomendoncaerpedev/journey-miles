import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/types';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = environment.apiURL;
  private userInfo = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    if (tokenService.hasToken())
      this.decodeJWT();
  }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.API}/auth/cadastro`, userData);
  }

  findRegister(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get<User>(`${this.API}/auth/perfil`, { headers });
  }

  editRegister(userData: User, token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.patch<User>(`${this.API}/auth/perfil`, userData, { headers });
  }

  decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;

    this.userInfo.next(user);
  }

  getUser() {
    return this.userInfo.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userInfo.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

}
