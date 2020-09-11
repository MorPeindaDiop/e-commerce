import { NgModule } from '@angular/core';
import { HttpCommunicationsService } from './HttpCommunications/http-communications.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService],
  imports: [
    HttpClientModule,
  ]
})
export class CoreModule { }
