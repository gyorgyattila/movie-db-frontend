import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUser: UserModel;
  user = new BehaviorSubject<UserModel>(null);


  constructor(private httpClient: HttpClient) {
  }


  async getUser(token: string) {
    this.httpClient.get('http://localhost:8080/user', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    }).subscribe(
      user => {
        this.newUser = new UserModel();
        this.newUser.email = user['email'];
        this.newUser.id = user['id'];
        this.newUser.nickName = user['userName'];
        this.newUser.picture = user['photo'];
        this.user.next(this.newUser);
      }
    );
  }
}
