import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
})
export class CarouselSliderComponent implements OnInit, AfterViewInit {
  @Input() items: Array<string> = [];
  @Input() automatic: boolean = false;

  private slideIndex = 1;
  constructor() { }
  ngAfterViewInit(): void {
    const firstSlide: Element = document.querySelector(
      '.carousel-container .carousel'
    );
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }

  ngOnInit(): void {
    if (this.automatic) {
      this.showSlide(this.slideIndex);
    }
  }

  public next(): void {
    const n = 1;
    let time = this.showSlide(this.slideIndex += n);
    this.cleartTime(time);
  }

  public prev(): void {
    const n = -1;
    let time = this.showSlide(this.slideIndex += n);

    this.cleartTime(time);
  }

  private cleartTime(t: any): void {
    if (this.automatic) {
      clearTimeout(t);
    }
  }

  private showSlide(numero: number): any {
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

      // console.log(this.items[this.slideIndex-1])


    if (this.automatic) {
      let time = 5000;
      if(this.items[this.slideIndex-1]){
        // time = this.items[this.slideIndex-1].duration
      }
      let timeout = setTimeout(() => {
        this.showSlide((this.slideIndex += 1));
      }, 5000);

      return timeout;
    }
  }
}
