import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  term: string | null = '';

  clear() {
    this.term = '';
  }


  isLoggedIn: boolean = false;

  constructor(private _AuthService: AuthService) {}

  ngOnInit() {
    
    this._AuthService.loggedinUser.subscribe({
      next: () => {
        if (this._AuthService.loggedinUser.getValue() != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
    });
    this._AuthService.currentUser();
  }

  logout() {
    localStorage.removeItem('mToken');
    this.isLoggedIn = false;
  }
}
