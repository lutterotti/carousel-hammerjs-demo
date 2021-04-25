import { Component, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'carousel',
  template: `
    <div class="carousel-container__wrapper" #carouselContainer>
      <div class="carousel-content__wrapper">
        <ng-container *ngFor="let card of cards; index as index;">
          <div *ngIf="index === carousel_index">
            <ng-template [ngTemplateOutlet]="carouselContent" [ngTemplateOutletContext]="{card: card, cardIndex: index}"></ng-template>
          </div>
        </ng-container>
      </div>
      <div class="carousel-pagination">
        <ng-container *ngFor="let paginate of pagination; index as index;" (click)="updateCarouselIndexWithPagination(index)">
          <div class="pagination-content__wrapper" (click)="updateCarouselIndexWithPagination(index)" [ngClass]="{'paginate--selected': index === carousel_index}">
            <ng-template [ngTemplateOutlet]="carouselPagination" [ngTemplateOutletContext]="{paginate: paginate, paginationIndex: index}" ></ng-template>
          </div>
        </ng-container>
      </div>
    </div>
  `
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  @ViewChild('carouselContainer', { static: false }) carousel_container: ElementRef;
  @Input() carouselContent: any;
  @Input() carouselPagination: any;
  @Input() cards: any[];
  @Input() pagination: any[];
  public carousel_index = 0;
  public swipe_direction = 0;
  public swipe_start_position = 0;
  private hammer_container: HammerManager;

  constructor(private ChangeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.hammer_container = new Hammer.Manager(this.carousel_container.nativeElement);
    const pan_event = new Hammer.Pan();
    this.hammer_container.add(pan_event);

    this.hammer_container.on('panleft', (e: HammerInput) => {
      const source_event = e.srcEvent as PointerEvent;
      this.swipe_direction = this.swipe_start_position - source_event.pageX;
    });

    this.hammer_container.on('panright', (e: HammerInput) => {
      const source_event = e.srcEvent as PointerEvent;
      this.swipe_direction = this.swipe_start_position - source_event.pageX;
    });

    this.hammer_container.on('panstart', (e: HammerInput) => {
      const source_event = e.srcEvent as PointerEvent;
      this.swipe_start_position = source_event.pageX;
    });

    this.hammer_container.on('panend', (e: HammerInput) => {
      this.updateCarouselIndex();
    });

    this.ChangeDetectorRef.detectChanges();
  }

  ngOnChanges() {
    this.updateCarouselIndex();
  }

  updateCarouselIndex() {
    const number_of_cards = this.cards.length - 1;
    if ((this.swipe_direction > 0) && (this.carousel_index < number_of_cards)) {
      this.carousel_index = this.carousel_index + 1;
    } else if (this.swipe_direction < 0 && (this.carousel_index > 0)) {
      this.carousel_index = this.carousel_index - 1;
    }
  }

  updateCarouselIndexWithPagination(index: number) {
    this.carousel_index = index;
  }
}