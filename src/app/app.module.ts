import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './redux/users/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './redux/users/login.effects';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({ usersState: usersReducer }),
    EffectsModule.forRoot([LoginEffects]),
    /*StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
