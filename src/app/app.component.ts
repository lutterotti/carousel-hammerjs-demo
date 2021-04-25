import { Component } from '@angular/core';

export interface CarouselContent {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <carousel class="carousel" [carouselContent]="carouselContent" [carouselPagination]="carouselPagination" [cards]="first_carousel_content" [pagination]="first_carousel_content">
        <ng-template #carouselContent let-card="card" let-cardIndex="index">
          <carousel-content [content]="card"></carousel-content>
        </ng-template>

        <ng-template #carouselPagination let-paginate="paginate" let-paginationIndex="index">
          <!-- these wrapped components can be any custom component that takes in an input -->
          <carousel-content-pagination [content]="paginate"></carousel-content-pagination>
        </ng-template>
      </carousel>

      <carousel class="carousel" [carouselContent]="carouselContent2" [carouselPagination]="carouselPagination2" [cards]="second_carousel_content" [pagination]="second_carousel_content">
        <ng-template #carouselContent2 let-card="card" let-cardIndex="index">
          <!-- this allows for extensive customization beyond the bootstrap carousel -->
          <carousel-content [content]="card"></carousel-content>
        </ng-template>

        <ng-template #carouselPagination2 let-paginate="paginate" let-paginationIndex="index">
          <second-carousel-pagination [content]="paginate"></second-carousel-pagination>
        </ng-template>
      </carousel>
    </div>
  `
})
export class AppComponent {
  title = 'carousel-hammerjs-demo';
  public first_carousel_content: CarouselContent[] = [{
    title: 'Slide One',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies luctus lectus, in tincidunt justo sollicitudin a. Suspendisse placerat`
  }, {
    title: 'Slide One Point Five',
    description: `enim eu risus ultrices cursus. Proin venenatis, justo ac luctus consequat`
  }, {
    title: 'Slide Three',
    description: `Quisque ut laoreet mi, non pellentesque quam. Nullam at vehicula lacus.`
  }, {
    title: 'Slide Four',
    description: `Phasellus vehicula, dui ut pharetra faucibus, diam est varius mauris, sed cursus tortor enim quis magna. Vivamus at auctor nisl, at volutpat lorem.`
  }];

  public second_carousel_content: CarouselContent[] = [{
    title: 'Hello',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  }, {
    title: 'How',
    description: `enim eu risus ultrices cursus. Proin venenatis, justo ac luctus consequat`
  }, {
    title: 'Are',
    description: `Quisque ut laoreet mi, non pellentesque quam. Nullam at vehicula lacus.`
  }, {
    title: 'You',
    description: `Phasellus vehicula, dui ut pharetra faucibus, diam est varius mauris, sed cursus tortor enim quis magna. Vivamus at auctor nisl, at volutpat lorem.`
  },
  {
    title: 'Doing?',
    description: `Phasellus vehicula, dui ut pharetra faucibus, diam est varius mauris, sed cursus tortor enim quis magna. Vivamus at auctor nisl, at volutpat lorem.`
  }];
}
