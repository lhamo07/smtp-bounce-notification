import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: Authservice) {}

  ngOnInit(): void {
    this.loggedInUser();
  }
  loggedInUser() {
    return this.authService.loggedInCheck();
  }
}
