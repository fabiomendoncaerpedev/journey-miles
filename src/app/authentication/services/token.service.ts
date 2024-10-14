import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable()
export class TokenService {

  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
