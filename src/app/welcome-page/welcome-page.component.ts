import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  /**
   * Function to open user registration dialog
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Function to open user login dialog
   */
  openUserLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '280px'
    });
  }
}
