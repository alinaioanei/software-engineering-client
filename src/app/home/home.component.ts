import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../shared/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    });
    console.log('user saved');
    this.user = new User();
  }
}
