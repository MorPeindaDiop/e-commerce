import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';
import { loginUser, loginUserFailure, loginUserSuccess, initUser, signUpUser, signUpUserSuccess } from './login.action';

@Injectable()
export class LoginEffects{
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllUsers():Observable<User[]>{
        return this.http.retrieveGetCall<User[]>("users")
    }
    
    checkUserAccount(username:string,password:string,users){
       return users.find(actualUser=>actualUser.username === username && actualUser.password === password);
    }
    
    registerUser(username: string, name: string, surname: string, password: string):Observable<User>{
       return this.http.retrievePostCall<User>("users",{username, name, surname, password})
    }
    
    formatUser(user: User): User{
        return {id: user.id, username: user.username, name: user.name, surname: user.surname, password: user.password} as User;
    }
      
    loginUser$=createEffect(()=>this.actions$.pipe(
        ofType(loginUser),
        switchMap(action=>this.retreiveAllUsers().pipe(
          switchMap(users=>of(this.checkUserAccount(action.username,action.password,users)).pipe(
            map( user=>{
              if(typeof user === 'undefined'){
                return loginUserFailure({error:'username e/o password non corretta'})
              }else{
                return loginUserSuccess({user});
              }
            })
          ))
        ))
      ));

      loginUserSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(loginUserSuccess),
        tap(action=>{
          console.log('salvo utente in sessione da auth.effects');
          sessionStorage.setItem("utente", JSON.stringify({username:action.user.username,id:action.user.id}))
        }),
        map( (action) => initUser({ user: action.user })),
        tap(()=>this.router.navigateByUrl('/home'))
      ));
      
      signUpUser$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUser),
        switchMap(action=>this.registerUser(action.username, action.name, action.surname, action.password).pipe(
        tap(user=> console.log(user)),
        switchMap(user=>of(this.formatUser(user)).pipe(
        map( (formattedUser) => signUpUserSuccess({ user: formattedUser }))
        ))
        ))
    ));
        
    signUpUserSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUserSuccess),
        //tap((action)=>console.log('utente,registrato adesso devo registrarlo nella sessione e reindirizzarlo',action)),
        map( (action) => initUser({ user:action.user })),
        tap((action)=>{
        //console.log('salvo in sessione l\'utente appena registrato');
        sessionStorage.setItem("utente", JSON.stringify({username: action.user.username }))
        this.router.navigateByUrl('/home');
    })
    ))

}