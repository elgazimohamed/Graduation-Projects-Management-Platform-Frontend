import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EncadrantModel } from '../encadrant/encadrant.module';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';
import { LienDriveModel } from './lienDrive.module';
import { RendezVousModel } from './rendezvous.module';

@Component({
  selector: 'app-groupe-de-travail',
  templateUrl: './groupe-de-travail.component.html',
  styleUrls: ['./groupe-de-travail.component.css'],
})
export class GroupeDeTravailComponent implements OnInit {
  statut: string = 'En attent';
  formValue!: FormGroup;
  rendobj: RendezVousModel = new RendezVousModel();
  driveobj: LienDriveModel = new LienDriveModel();
  allrend: any;
  allDrive: any;
  showLien: boolean = false;
  idEtudiant: number;
  idgroupe: number;
  groupe: any;
  sujet: any;
  etudiant: any;
  lien: string;
  ajouterLienRqst: {
    id: number;
    lienDrive: string;
  };

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      lienDrive: [''],
    });

    this.idEtudiant = parseInt(this.userAuthService.getId());

    this.etudiantService.getEtudiant(this.idEtudiant).subscribe(
      (response) => {
        this.etudiant = response;
        console.log(this.etudiant);
      },
      (error) => {
        console.log(error);
      }
    );
    this.etudiantService.getAllEtudiantsInGroupe(this.idEtudiant).subscribe(
      (response) => {
        this.groupe = response;
        console.log(this.groupe);
      },
      (error) => {
        console.log(error);
      }
    );
    this.etudiantService.getSujetAccepte(this.idEtudiant).subscribe(
      (response) => {
        this.sujet = response;
        console.log(this.sujet);
      },
      (error) => {
        console.log(error);
      }
    );
    this.lien = this.etudiant.groupe.lienDrive;
    // this.formValue = this.formBuilder.group({
    //   lienDrive: [''],
    // });
  }

  AddRend() {}
  AddLienDrive() {
    this.driveobj.lienDrive = this.formValue.value.lienDrive;
    this.ajouterLienRqst = {
      id: this.idEtudiant,
      lienDrive: this.driveobj.lienDrive,
    };
    console.log(this.ajouterLienRqst);

    this.etudiantService.addLienDrive(this.ajouterLienRqst).subscribe(
      (response) => {
        alert('Le lien a été ajouté avec succée');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
