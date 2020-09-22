import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoesColorComponent } from './shoes-color/shoes-color.components';



@NgModule({
  declarations: [
    ShoesColorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoesColorComponent
  ]
})
export class SharedModule { }