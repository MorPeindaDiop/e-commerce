import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sneakers } from 'src/app/core/model/sneakers';
import { getCurrentNavigatedSneakers } from 'src/app/redux/sneakers';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  customForm: FormGroup;
  currentsneakers: Sneakers;
  img: string = "";
  currentUserId: number;
  
  get sneakers(): Observable<Sneakers> {
    return this.store.pipe(select(getCurrentNavigatedSneakers));
  }

  // get user(): Observable<User> {
  //   return this.store.pipe(select(getCurrentUser));
  // }
  constructor(fb: FormBuilder, private store: Store, private router: Router) {
    this.customForm = fb.group({
      chiusura: ['', Validators.required],
      numero: ['', Validators.required],
      testo: [''],
      coloretesto: [''],
    });
    
  }
  
  ngOnInit(): void {
    // //this.store.dispatch(retrieveAllProducts())
    // console.log(this.product);
    // this.product.subscribe(productSelected => {
    //   this.prodotto = productSelected;
    //   this.img = productSelected.img;
    //   this.productNumbers = productSelected.number;
    //   console.log(this.img);
    // });

    // this.user.subscribe(user => {
    //   this.currentUserId = user.id;
    // })
  }
  
  // ripristina() {
  //   this.personalizzaForm.reset()
  // }

  // add() {
  //   let cartProduct: CustomProduct = {
  //     prodotto:  this.prodotto,
  //     ...this.personalizzaForm.value,
      
  //   };
  //   console.log(cartProduct);
  //   this.personalizzaService.addToCart(cartProduct);
  //   this.router.navigateByUrl('/cart/'+this.currentUserId);
  // }

}