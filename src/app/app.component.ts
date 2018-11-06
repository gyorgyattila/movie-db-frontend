import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AppComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

}
