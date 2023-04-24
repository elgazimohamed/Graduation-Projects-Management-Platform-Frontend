// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UserAuthService } from '../_services/user-auth.service';
// import { UserService } from '../_services/user.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class EncadreGuard implements CanActivate {
//   constructor(
//     private authService: UserAuthService,
//     private router: Router,
//     private UserService: UserService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (this.authService.getToken() !== null) {
//       const role = route.data['roles'] as Array<string>;
//       console.log(role);
//       const match = this.UserService.roleMatchEncadre();

//       if (role) {
//         if (match) {
//           return true;
//         } else {
//           this.router.navigate(['/forbidden']);
//           return false;
//         }
//       }
//     }

//     this.router.navigate(['/login']);
//     return false;
//   }
// }
