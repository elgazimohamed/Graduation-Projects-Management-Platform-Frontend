import { Component, OnInit } from '@angular/core';
import { EncadrantService } from '../_services/encadrant.service';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-groupes-acceptes',
  templateUrl: './groupes-acceptes.component.html',
  styleUrls: ['./groupes-acceptes.component.css'],
})
export class GroupesAcceptesComponent implements OnInit {
  allSujets;
  id: number;
  constructor(
    private userAuthService: UserAuthService,
    private encadrantService: EncadrantService,
    private etudiantService: EtudiantService
  ) {
    this.id = parseInt(this.userAuthService.getId());
  }

  ngOnInit(): void {
    this.encadrantService.getMySujets(this.id).subscribe(
      (response) => {
        console.log(response);
        this.allSujets = response.filter(
          (sujet: any) => sujet.choisie == 'oui'
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
