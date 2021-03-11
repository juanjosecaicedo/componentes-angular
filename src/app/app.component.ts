import { Component } from '@angular/core';

declare interface DATA_IMAGES {
  src: string,
  alt?: string,
  duration?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'componentes';

  items: Array<DATA_IMAGES> = [
    {
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
      alt: '...',
      duration: 2000
    },
    {
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
      alt: '...',
      duration: 8000
    },
    {
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg',
      alt: '...',
      duration: 5000
    }
  ]
}
