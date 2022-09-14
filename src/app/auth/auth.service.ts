import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interface/user';
import { LocalService } from '../shared/services/local.service';
import { StateService } from '../shared/services/state.service';

export let sessions: string = "userSessions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User = {
    email: 'admin@gmail.com',
    password: 'admin'
  }

  constructor(
    private router: Router,
    private localService: LocalService,
    private stateService: StateService
  ) { }

  login(args: User) {
    if (JSON.stringify(args) !== JSON.stringify(this.user)) {
      this.stateService.openSnackBar('error');
      return;
    }
    this.localService.saveData(sessions, JSON.stringify(args));
    this.router.navigate(["employee"]);
    this.stateService.openSnackBar('success');
  }

  logout() {
    this.localService.removeData(sessions);
    this.router.navigate(["login"]);
  }

  getToken() {
    return this.localService.getData(sessions);
  }

  getUser() {
    return JSON.parse(this.getToken());
  }
}
