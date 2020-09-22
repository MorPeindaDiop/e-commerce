import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sneakers } from 'src/app/core/model/sneakers';
import { selectSneakers, selectSneakersByBrand } from 'src/app/redux/sneakers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private store:Store) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit(): void {
    console.log(this.sneakers);
  }

  get sneakers(): Observable<Sneakers[]> {    return this.store.pipe(select(selectSneakers));  }
   
}