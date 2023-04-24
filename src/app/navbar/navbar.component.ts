import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncadrantComponent } from '../encadrant/encadrant.component';
import { EncadrantService } from '../_services/encadrant.service';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  id: number;
  public roles: any[];
  role: string;
  user;
  show: boolean;

  constructor(
    private route: Router,
    public User: UserService,
    private UserAuth: UserAuthService,
    private encadrantService: EncadrantService,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.UserAuth.getId());
    this.roles = this.UserAuth.getRoles();
    this.role = this.roles[0].roleName;

    if (this.role == 'encadrant') {
      this.encadrantService.getEncadrant(this.id).subscribe(
        (response) => {
          this.user = response;
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.role === 'etudiant' || this.role === 'encadre') {
      this.etudiantService.getEtudiant(this.id).subscribe((response) => {
        this.user = response;
      });
      // if (this.user.groupe.encadre === 'oui') {
      //   this.show = true;
      //   console.log('line 52 - show = ' + this.show);
      // } else if (this.user.groupe.encadre === 'non') {
      //   this.show = true;
      //   console.log('line 55 - show = ' + this.show);
      // }
    }
  }

  public isLoggedIn() {
    return this.UserAuth.isLoggedIn();
  }

  public logout() {
    this.UserAuth.clear();
    this.route.navigate(['/home']);
  }
}
