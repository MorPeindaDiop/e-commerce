import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoesColorComponent } from './shoes-color.components';

describe('ShoesColorComponent', () => {
  let component: ShoesColorComponent;
  let fixture: ComponentFixture<ShoesColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});