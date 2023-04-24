import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css'],
})
export class PostulerComponent implements OnInit {
  idEtudiant: number;
  groupes;
  idSujet: number;
  data: any;
  disable: boolean = true;
  creerGrpReqt: {
    idEtudiant: number;
    idSujet: number;
  };
  rejoindreGrpReqt: {
    idEtudiant: number;
    idGroupe: number;
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private etudiantService: EtudiantService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idSujet = parseInt(params.get('id'));
    });

    this.idEtudiant = parseInt(this.userAuthService.getId());

    this.etudiantService.getSujet(this.idSujet).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      }
    );
    // Get all groupes by sujet id
    this.etudiantService.getAllEtudiantsParGroupes(this.idSujet).subscribe(
      (response) => {
        this.groupes = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  creerGroupe() {
    this.creerGrpReqt = {
      idEtudiant: parseInt(this.userAuthService.getId()),
      idSujet: this.idSujet,
    };

    this.etudiantService.creerGroupe(this.creerGrpReqt).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    alert('Le groupe a été créé avec succès');
    this.disable = false;
  }
  rejoindreGroupe(groupe) {
    this.rejoindreGrpReqt = {
      idEtudiant: this.idEtudiant,
      idGroupe: groupe[0].groupe.id,
    };
    console.log(this.rejoindreGrpReqt);
    this.etudiantService.rejoindreGroupe(this.rejoindreGrpReqt).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    alert('Vous avez été ajouté avec succès au groupe');
    location.reload();
  }
}
