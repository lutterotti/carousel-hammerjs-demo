import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselContentComponent } from './carousel-content.component';
import { CarouselContentPaginationComponent } from './carousel-content-pagination.component';
import { SecondCarouselPaginationComponent } from './second-carousel-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselContentComponent,
    CarouselContentPaginationComponent,
    SecondCarouselPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
