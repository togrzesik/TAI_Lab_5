import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

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
