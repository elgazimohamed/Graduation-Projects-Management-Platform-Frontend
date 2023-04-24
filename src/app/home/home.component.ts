import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userAuth: UserAuthService) {}

  ngOnInit(): void {}

  public isLoggedIn(): boolean {
    return this.userAuth.isLoggedIn();
  }
}
