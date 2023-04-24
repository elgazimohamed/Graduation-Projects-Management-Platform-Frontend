import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') as string);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') as string;
  }

  public setId(id: number) {
    localStorage.setItem('id', id.toString());
  }

  public getId(): string {
    return localStorage.getItem('id') as string;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return this.getRoles() != null && this.getToken() != null;
  }
}
