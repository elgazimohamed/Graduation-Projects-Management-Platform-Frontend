import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncadrantService } from '../_services/encadrant.service';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-groupes-postules',
  templateUrl: './groupes-postules.component.html',
  styleUrls: ['./groupes-postules.component.css'],
})
export class GroupesPostulesComponent implements OnInit {
  idSujet: number;
  idEncadrant: number;
  sujet: any;
  myAllSujet: any[];
  groupePostule: any[];
  groupes: any[];
  accepterReq: {
    idGroupe: number;
    idSujet: number;
    idEncadrant: number;
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService,
    private encadrantService: EncadrantService,
    private userAuthService: UserAuthService
  ) {
    this.idEncadrant = parseInt(this.userAuthService.getId());
    this.route.paramMap.subscribe((params) => {
      this.idSujet = parseInt(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.encadrantService.getMySujets(this.idEncadrant).subscribe(
      (response: any) => {
        this.myAllSujet = response;
        console.log(this.myAllSujet);
      },
      (error) => {
        console.log(error);
      }
    );

    this.etudiantService.getSujet(this.idSujet).subscribe(
      (response) => {
        this.myAllSujet.forEach((element) => {
          if (element.id === response.id) {
            this.sujet = element;
          } else {
            this.router.navigate['/postulation'];
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );

    this.etudiantService.getAllEtudiantsParGroupes(this.idSujet).subscribe(
      (response) => {
        this.groupes = response;
        console.log(this.groupes);
        this.groupePostule = this.groupes.filter(
          (groupe: any[]) => groupe.length == this.sujet.nombreMembres
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  accepter(groupe: any) {
    if (
      window.confirm('Voulez-vous vraiment accepter ce groupe pour ce sujet ?')
    ) {
      this.accepterReq = {
        idGroupe: groupe[1].groupe.id,
        idSujet: this.idSujet,
        idEncadrant: this.idEncadrant,
      };

      this.encadrantService.accepterGroupe(this.accepterReq).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      this.router.navigate(['/postulation']);
    }
  }
}
