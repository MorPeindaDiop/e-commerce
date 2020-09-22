import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-shoes-color',
  templateUrl: './shoes-color.component.html',
  styleUrls: ['./shoes-color.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShoesColorComponent),
    multi: true
  }]
})
export class ShoesColorComponent implements OnInit, ControlValueAccessor {

  onChange: any = () => {};
  onTouch: any = () => {};
  value: string;
  colors: string[] = ['black', 'white', 'gray'];

  constructor() { }
  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  selectColor(item: string) {
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}