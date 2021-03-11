import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselSlideModule } from './components/carousel-slide/carousel-slider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
