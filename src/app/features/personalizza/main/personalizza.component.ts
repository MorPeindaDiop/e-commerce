import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomSneakers } from 'src/app/core/model/customSneakers';
import { Sneakers } from 'src/app/core/model/sneakers';
import { User } from 'src/app/core/model/user';
import { getCurrentNavigatedSneakers, selectSneakersByBrand } from 'src/app/redux/sneakers';
import { sneakersReducer } from 'src/app/redux/sneakers/sneakers.reducers';
import { getCurrentUser } from 'src/app/redux/users';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {
  [x: string]: any;
  prodotto: Sneakers;
  customForm: FormGroup;
  currentsneakers: Sneakers;
  img: string="";
  brand: string="";
  currentUserId: number;
  imgA:string[]
  get sneakers(): Observable<Sneakers> {
    return this.store.pipe(select(selectSneakersByBrand));
    
  }

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }
  constructor(fb: FormBuilder, private store: Store, private router: Router) {
    this.customForm = fb.group({
      chiusura: ['', Validators.required],
      color: ['', Validators.required],
      testo: [''],
      
      img:['']
    });
    this.sneakers.subscribe(currentImg=>{
      this.img=currentImg.img
    });
    this.sneakers.subscribe(currentBrand=>{
      this.brand=currentBrand.brand
    });

    console.log(this.sneakers);
  }
  
  ngOnInit(): void {
   
    //this.store.dispatch(retrieveAllProducts())
    console.log(this.sneakers);
    this.sneakers.subscribe(productSelected => {
      this.prodotto = productSelected;
      this.img = productSelected.img;
      console.log(this.img);
    });

    this.user.subscribe(user => {
      this.currentUserId = user.id;
    })
  }
  // ripristina() {
  //   this.personalizzaForm.reset()
  // }

  add() {
    let cartSneakers: CustomSneakers = {
      prodotto:  this.prodotto,
      ...this.customForm.value,
      
    };
    console.log(cartSneakers);
    this.customService.addToCart(cartSneakers);
    this.router.navigateByUrl('/cart/'+this.currentUserId);
   }
  

}