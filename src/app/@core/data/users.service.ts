import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'User A', picture: 'assets/images/user_a.png' },
    eva: { name: 'User B', picture: 'assets/images/user_a.png' },
    jack: { name: 'User C', picture: 'assets/images/user_a.png' },
    lee: { name: 'User D', picture: 'assets/images/user_a.png' },
    alan: { name: 'User E', picture: 'assets/images/user_a.png' },
    kate: { name: 'User F', picture: 'assets/images/user_a.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
