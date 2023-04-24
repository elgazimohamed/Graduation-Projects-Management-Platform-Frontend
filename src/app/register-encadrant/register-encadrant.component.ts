import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EncadrantService } from '../_services/encadrant.service';
import { Registerencadrant } from './register-enc.Module';

@Component({
  selector: 'app-register-encadrant',
  templateUrl: './register-encadrant.component.html',
  styleUrls: ['./register-encadrant.component.css'],
})
export class RegisterEncadrantComponent implements OnInit {
  public formRegister!: FormGroup;
  departements: any[];
  encdobj: Registerencadrant = new Registerencadrant();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private encadrantService: EncadrantService
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group(
      {
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, this.emailValidator]],
        idDepartement: [''],
        password: ['', Validators.required],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );

    this.encadrantService.getAllDepartements().subscribe(
      (response) => {
        this.departements = response;
        console.log(this.departements);
      },
      (error) => {
        console.log(error);
      }
    );
    this.encdobj.idDepartement = this.departements[''];
  }
  // Custom validator function to compare passwords
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null
      : { mismatch: true };
  }

  emailValidator(control: FormControl) {
    const email = control.value;
    if (!email.endsWith('@uae.ac.ma')) {
      return { email: true };
    }
    return null;
  }
  registerEncadrant() {
    this.encadrantService.addEncadrant(this.formRegister.value).subscribe(
      (response) => {
        alert('Vous avez été inscrit avec succès.');
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/login']);
  }
}
