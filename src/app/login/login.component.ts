import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    public userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const emailExtention = this.loginForm.value.email.split('@')[1];
      if (emailExtention == 'etu.uae.ac.ma') {
        this.userService.login(this.loginForm.value).subscribe(
          (response: any) => {
            this.userAuthService.setRoles(response.user.roles);
            this.userAuthService.setToken(response.jwtToken);
            this.userAuthService.setId(response.user.idEtudiant);

            this.router.navigate(['/etudiant']);
          },
          (error) => {
            console.log('error : ' + error);
            this.error = "L'email ou le mot de passe est incorrect";
          }
        );
      } else if (emailExtention == 'uae.ac.ma') {
        this.userService.login(this.loginForm.value).subscribe(
          (response: any) => {
            this.userAuthService.setRoles(response.user.roles);
            this.userAuthService.setToken(response.jwtToken);
            this.userAuthService.setId(response.user.idEncadrant);

            this.router.navigate(['/encadrant']);
          },
          (error) => {
            console.log('error : ' + error);
            this.error = "L'email ou le mot de passe est incorrect";
          }
        );
      }
    }
  }
}
