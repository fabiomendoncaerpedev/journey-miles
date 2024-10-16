import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../../core/types/types';
import { UserService } from 'src/app/authentication/services/user.service';

@Injectable()
export class AuthenticationService {

  private API = environment.apiURL;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(email: string, password: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.API}/auth/login`,
      { email: email, senha: password },
      { observe: 'response' }).pipe(
        tap((response) => {
          const authToken = response.body?.access_token ?? '';

          this.userService.saveToken(authToken);
        })
      );
  }
}
