import { Component, Input } from '@angular/core';
import { CarouselContent } from './app.component';

@Component({
  selector: 'carousel-content-pagination',
  template: `
    <div class="pagination-content">
      <p>{{content.title}}</p>
    </div>
  `
})
export class CarouselContentPaginationComponent {
  @Input() content: CarouselContent;
}
