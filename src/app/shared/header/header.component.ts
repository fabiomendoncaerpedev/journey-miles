import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = this.userService.getUser();

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  logout() {
    this.userService.logout();

    this.router.navigate(['auth/login']);
  }
}
