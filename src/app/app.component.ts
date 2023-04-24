import { Component } from '@angular/core';
import { UserAuthService } from './_services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PFE-Spring';

  constructor(private userAuth: UserAuthService){}

  public isLoggedIn(): boolean{
    return this.userAuth.isLoggedIn();
  }

}
