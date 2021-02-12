import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, HostListener, OnDestroy } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'carousel',
  styles: [`
    .carousel-container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carousel-content {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid gray;
    }
  `],
  template: `
    <div class="carousel-container" #carouselContainer>
      <div class="carousel-content">
        <ng-container *ngFor="let card of cards; index as i;">
          <div *ngIf="i === carousel_index">
            <h5>{{card.title}}</h5>
            <h6>{{card.description}}</h6>
          </div>
        </ng-container>
      </div>
    </div>
  `
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  @Input() cards: any[];
  @ViewChild('carouselContainer', { static: true }) carousel_container: ElementRef;
  public carousel_index = 0;
  private hammer_container: HammerManager;

  constructor(private ChangeDetectorRef: ChangeDetectorRef) {}
  // i believe we can simulate the swipe functionality with panleft and panright through detecting the pressure attribute in the pointerevent
  // from there we can determine if the swipe was left or right based off if the x1 - x2 co-ordinates are negative (left) positive (right)

  ngAfterViewInit() {
    this.hammer_container = new Hammer.Manager(this.carousel_container.nativeElement);
    const pan_event = new Hammer.Pan();
    this.hammer_container.add(pan_event);

    this.hammer_container.on('panleft', (e: HammerInput) => {
      const source_event = e.srcEvent as PointerEvent;
      console.log('panleft', source_event);
    });
    this.hammer_container.on('panright', (e: HammerInput) => {
      const source_event = e.srcEvent as PointerEvent;
      console.log('panright', source_event);
    });

    this.ChangeDetectorRef.detectChanges();
  }

  ngOnChanges() {}
}