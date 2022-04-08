import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';
export class User {
  name: any;
 
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  isSignedIn!: boolean;
  UserProfile!: User;
  constructor(public authService: AuthService,  private auth: AuthStateService,
    public router: Router,
    public token: TokenService) {
   
  }




  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      this.authService.profileUser().subscribe((data: any) => {
        this.UserProfile = data;
    });
    });
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
    
  }
}