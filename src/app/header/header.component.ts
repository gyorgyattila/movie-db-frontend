import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FilmModel} from '../film/film.model';
import {FilmService} from '../services/film.service';
import {DataStorageService} from '../shared/data-storage.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../user/user.model';
import {UserService} from '../services/user.service';


@Component({
  providers: [DataStorageService],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  myControl: FormControl = new FormControl();
  filteredOptions: Observable<any>;
  searchTerm: string;
  subScription: Subscription;
  user: UserModel;

  constructor(private filmService: FilmService, public authService: AuthService, private userService: UserService) {
  }

  films: FilmModel[] = [];
  ngOnInit() {
    this.userService.getUser(localStorage.getItem('access_token'));
    this.filmService.filmListChanged.subscribe(
      (films: FilmModel[]) => {
        this.films = films;
      }
    );
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => value.length >= 2 ? this.filter(value) : [])
      );
    this.subScription = this.userService.user.subscribe(user => this.user = user);
  }

  private filter(value: string): FilmModel[] {
    const filterValue = value.toLowerCase();

    return this.films.filter(option => option.title.toLowerCase().includes(filterValue));
  }

  onChange(value: string) {
    this.filmService.setSearchText(value);
  }

  toLogin() {
    this.authService.login();
  }

  toLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subScription.unsubscribe();
  }

}
