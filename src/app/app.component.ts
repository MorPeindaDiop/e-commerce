import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { retrieveAllProducts } from './redux/sneakers/sneakers.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  currentRoute: string = null;

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });
    this.store.dispatch(retrieveAllProducts());
  }

  isLog(): boolean {
    if (this.currentRoute === "/login" || this.currentRoute === "/register") 
    return true
  }
}
