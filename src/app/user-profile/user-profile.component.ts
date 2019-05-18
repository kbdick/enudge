import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  faGoogle = faGoogle;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}