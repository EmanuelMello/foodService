import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user!:User;

  logout(){
    this.userService.logout();
  }

  constructor( private userService:UserService) {

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }
}
