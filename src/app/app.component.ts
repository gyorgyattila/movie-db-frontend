import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AppComponent {
  url = 'http://cdn.traileraddict.com/img/bg_pattern.jpg';
}
