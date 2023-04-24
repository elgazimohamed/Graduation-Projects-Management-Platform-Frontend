import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  Role: {
    idRole: number;
    roleName: string;
  };

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles: string[] | any[]): any {
    let isMatch: boolean = false;
    const userRoles: any[] = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  // [{"idRole":3,"roleName":"encadre"},{"idRole":1,"roleName":"etudiant"}]

  // public roleMatchEncadre(): any {
  //   let isMatch: boolean = false;
  //   const userRoles: any[] = this.userAuthService.getRoles();
  //   if (
  //     (userRoles[0].roleName == 'etudiant' &&
  //       userRoles[1].roleName == 'encadre') ||
  //     (userRoles[0].roleName == 'encadre' &&
  //       userRoles[1].roleName == 'etudiant')
  //   ) {
  //     isMatch = true;
  //     return isMatch;
  //   }
  //   return isMatch;
  // }
  hasRoles(userRoles: any[], rolesToCheck: string[]): boolean {
    const roleNames = userRoles.map((role) => role.roleName);
    return rolesToCheck.every((role) => roleNames.includes(role));
  }

  isSelectionner(user: any): boolean {
    if (user.roles[0].roleName === 'etudiant') {
      if (user.groupe != null) {
        if (user.groupe.encadre === 'oui') {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
