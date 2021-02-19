import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TestComponent } from './test.component';
import { TestPaginationComponent } from './test-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TestComponent,
    TestPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
