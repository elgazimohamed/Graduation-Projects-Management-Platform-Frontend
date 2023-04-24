import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EtudiantService } from '../_services/etudiant.service';
import { Registeretudiant } from './register-etu.Module';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css'],
})
export class RegisterEtudiantComponent implements OnInit {
  public formRegister!: FormGroup;

  public error: string = '';
  filieres;

  etdobj: Registeretudiant = new Registeretudiant();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group(
      {
        codeApogee: ['', [Validators.required, Validators.minLength(8)]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, this.emailValidator]],
        idFiliere: [''],
        password: ['', Validators.required],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );

    this.etudiantService.getAllFilieres().subscribe((response) => {
      this.filieres = response;
    });

    this.etdobj.idFiliere = this.filieres[''];
  }
  // Custom validator function to compare passwords
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null
      : { mismatch: true };
  }

  emailValidator(control: FormControl) {
    const email = control.value;
    if (!email.endsWith('@etu.uae.ac.ma')) {
      return { email: true };
    }
    return null;
  }
  registerEtudiant() {
    delete this.formRegister.value.passwordConfirm;
    this.etudiantService.addEtudiant(this.formRegister.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    alert('Vous avez été inscrit avec succès.');
    this.router.navigate(['/login']);
  }
}
