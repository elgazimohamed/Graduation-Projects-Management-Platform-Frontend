import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EncadrantService } from '../_services/encadrant.service';
import { EtudiantService } from '../_services/etudiant.service';
import { UserAuthService } from '../_services/user-auth.service';
import { RendEncadModel } from './rendEncd.Module';

@Component({
  selector: 'app-deatils-encad',
  templateUrl: './deatils-encad.component.html',
  styleUrls: ['./deatils-encad.component.css'],
})
export class DeatilsEncadComponent implements OnInit {
  statut: string = 'En attente';
  formValue!: FormGroup;
  rendobj: RendEncadModel = new RendEncadModel();
  allrend: any;
  btnUpdateShow: boolean = false;
  idEncadrant: number;
  idSujet: number;
  sujet;
  etudiants;

  btnSaveShow: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private route: ActivatedRoute,
    private encadrantService: EncadrantService,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idSujet = parseInt(params.get('id'));
    });

    this.idEncadrant = parseInt(this.userAuthService.getId());

    this.encadrantService.getEtudiantsSujetAccepte(this.idSujet).subscribe(
      (response) => {
        this.etudiants = response;
        console.log(this.etudiants);
      },
      (error) => {
        console.log(error);
      }
    );

    this.etudiantService.getSujet(this.idSujet).subscribe(
      (response) => {
        this.sujet = response;
      },
      (error) => {
        console.log(error);
      }
    );
    this.formValue = this.formBuilder.group({
      sujet: [''],
      date: [''],
      heure: [''],
    });
  }
}
