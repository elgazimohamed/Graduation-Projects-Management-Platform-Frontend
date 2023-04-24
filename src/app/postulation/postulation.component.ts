import { Component, OnInit } from '@angular/core';
import { EncadrantService } from '../_services/encadrant.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css'],
})
export class PostulationComponent implements OnInit {
  idEncadrant: number;
  allSujet: any;
  hasRefreshedPage = false;

  constructor(
    private encadrantService: EncadrantService,
    private userAuthService: UserAuthService
  ) {
    this.idEncadrant = parseInt(this.userAuthService.getId());
    this.encadrantService.getMySujets(this.idEncadrant).subscribe(
      (response: any) => {
        console.log(response);
        this.allSujet = response.filter((sujet: any) => sujet.choisie == 'non');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  refreshPageOnce() {
    if (!this.hasRefreshedPage) {
      this.hasRefreshedPage = true;
      location.reload();
    }
  }
}
