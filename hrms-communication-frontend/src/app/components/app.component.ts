import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>HRMS Communication Service</h1>
    <nav>
      <a routerLink="/surveys">Survey List</a> |
      <a routerLink="/submit-survey">Submit Survey</a> |
      <a routerLink="/messages">Messages</a> |
      <a routerLink="/send-message">Send Message</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
