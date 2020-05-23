import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService) {
  }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
  }
}
