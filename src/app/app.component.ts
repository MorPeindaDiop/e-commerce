import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  currentRoute: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });
  }

  isLog(): boolean {
    if (this.currentRoute === "/login" || this.currentRoute === "/register") 
    return true
  }
}
