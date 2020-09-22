import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Sneakers } from 'src/app/core/model/sneakers';
import { initProduct, retrieveAllProducts } from './sneakers.action';
import { Action } from '@ngrx/store';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';



@Injectable()
export class SneakersEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllProducts():Observable<Sneakers[]>{
        return this.http.retrieveGetCall<Sneakers[]>("sneakers")
    }

    getAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(() => this.retreiveAllProducts().pipe(
            tap((sneakers) => {
                let products=JSON.stringify(sneakers);
                sessionStorage.setItem("sneakers",products);
            }),
            map((sneakers) => initProduct({sneakers}))

        ))
    ));}
