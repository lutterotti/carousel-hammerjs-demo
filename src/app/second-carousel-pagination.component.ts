import { Component, Input } from '@angular/core';
import { CarouselContent } from './app.component';

@Component({
  selector: 'second-carousel-pagination',
  styles: [`
    .second-pagination-content {
      font-family: 'Amatic SC', cursive;
      height: 70px;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: #bdf7ff;
      box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.10);
      text-align: center;
    }
  `],
  template: `
    <div class="second-pagination-content">
      <p>{{content.title}}</p>
    </div>
  `
})
export class SecondCarouselPaginationComponent {
  @Input() content: CarouselContent;
}