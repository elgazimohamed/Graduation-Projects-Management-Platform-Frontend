import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EncadrantService } from '../_services/encadrant.service';
import { EtudiantService } from '../_services/etudiant.service';

@Component({
  selector: 'app-projets-pfe',
  templateUrl: './projets-pfe.component.html',
  styleUrls: ['./projets-pfe.component.css'],
})
export class ProjetsPfeComponent implements OnInit {
  allSujets: any;
  searchText: any;
  allDepartements: any;

  constructor(
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService,
    private encadrantService: EncadrantService
  ) {}

  ngOnInit(): void {
    this.etudiantService.getAllSujet().subscribe((response) => {
      this.allSujets = response;
      console.log(this.allSujets);
    });
    this.encadrantService.getAllDepartements().subscribe((response) => {
      this.allDepartements = response;
      console.log(this.allDepartements);
    });
  }
}
