import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import {Subject} from 'rxjs';
import {UserService} from './user.service';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'FhJXD9vemQ8ltt7McutTRyyHvw5X1XdN',
    domain: 'movie-db.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile email'
  });

  constructor(public router: Router, private userService: UserService) {
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        console.log(authResult);
        console.log(authResult.accessToken);
        console.log(localStorage.getItem('access_token'));
        this.userService.getUser(localStorage.getItem('access_token'));
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  // public getProfile(cb): void {
  //   const accessToken = localStorage.getItem('access_token');
  //   if (!accessToken) {
  //     throw new Error('Access Token must exist to fetch profile');
  //   }
  //
  //   const self = this;
  //   this.auth0.client.userInfo(accessToken, (err, profile) => {
  //     if (profile) {
  //       self.userProfile = profile;
  //     }
  //     cb(err, profile);
  //   });
  // }
}

