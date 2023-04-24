import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EtudiantService } from '../_services/etudiant.service';
import { EncadrantService } from '../_services/encadrant.service';
import { UserAuthService } from '../_services/user-auth.service';

//chartjpt
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  allSujets: any;
  searchText: any;
  allDepartements: any;
  idEtudiant: number;
  etudiant: any;
  encadre: string = 'non';

  constructor(
    private etudiantService: EtudiantService,
    private encadrantService: EncadrantService,
    private userAuth: UserAuthService
  ) {}

  ngOnInit(): void {
    this.idEtudiant = parseInt(this.userAuth.getId());

    this.etudiantService.getAllSujet().subscribe(
      (response) => {
        this.allSujets = response;
        console.log(this.allSujets);
      },
      (error) => {
        console.log(error);
      }
    );
    this.encadrantService.getAllDepartements().subscribe((response) => {
      this.allDepartements = response;
      console.log(this.allDepartements);
    });
    this.etudiantService.getEtudiant(this.idEtudiant).subscribe(
      (response) => {
        this.etudiant = response;
        console.log(this.etudiant);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
