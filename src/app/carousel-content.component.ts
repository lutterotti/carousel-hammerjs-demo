import { Component, Input } from '@angular/core';
import { CarouselContent } from './app.component';

@Component({
  selector: 'carousel-content',
  template: `
    <div class="carousel-content">
      <h6>{{content.title}}</h6>
      <p>{{content.description}}</p>
    </div>
  `
})
export class CarouselContentComponent {
  @Input() content: CarouselContent;
}
