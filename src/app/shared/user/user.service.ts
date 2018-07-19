import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8888/api/users/findAll');
  }

  register(user: User): Observable<any> {
    return this.http.post('//localhost:8888/api/users/register', user);
  }
}
