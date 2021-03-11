import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
})
export class CarouselSliderComponent implements OnInit, AfterViewInit {
  @Input() items: Array<string> = [];

  private slideIndex = 1;
  constructor() {}
  ngAfterViewInit(): void {
    const firstSlide: Element = document.querySelector(
      '.carousel-container .carousel'
    );
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }



  ngOnInit(): void {

  }

  public next(): void {
    const n = 1;
    this.showSlide((this.slideIndex += n));
  }

  public prev(): void {
    const n = -1;
    this.showSlide((this.slideIndex += n));
  }

  private showSlide(numero: number): void {
    const slides: NodeListOf<Element> | any = document.querySelectorAll(
      '.carousel-container .carousel'
    );
    numero > slides.length ? (this.slideIndex = 1) : null;
    numero < 1 ? (this.slideIndex = slides.length) : null;

    const slideShow = [...slides].find((el: any): boolean => {
      return el.classList.contains('active');
    });

    slideShow !== undefined ? slideShow.classList.remove('active') : null;
    [...slides].length
      ? [...slides][this.slideIndex - 1].classList.add('active')
      : false;
    console.log('llego')
    setInterval(() =>{
      this.showSlide(numero);
    }, 2000);
  }

}
