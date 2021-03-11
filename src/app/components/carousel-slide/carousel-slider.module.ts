import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './carousel-slider.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CarouselSliderComponent],
  exports: [
    CarouselSliderComponent
  ]
})
export class CarouselSlideModule { }
