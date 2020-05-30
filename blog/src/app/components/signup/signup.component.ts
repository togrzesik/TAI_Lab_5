import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public credentials = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
  }

}
