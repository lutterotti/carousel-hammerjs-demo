import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <carousel [cards]="cards" style="height: 100%; width: 100%;"></carousel>
  `
})
export class AppComponent {
  title = 'carousel-hammerjs-demo';
  public cards = [{
    title: 'Watching', description: `I heard that you've found someone Always knew you'd find someone Got the message, knew what it said I can't forget`
  }, {
    title: 'You',
    description: `I don't sleep, tangled up in the memory Of you and me, not you and her But for what's it worth`
  }, {
    title: 'Author',
    description: `You know I'll always pick up your call 'Cause I'd rather have than nothing at all I heard that you've found someone Did you really find someone?`
  }, {
    title: 'Robinson',
    description: `I'm too tired to pretend that last night didn't hurt When you called me a friend And it wouldn't be the first time you made me cry You don't even know why And I'm watching as you watching her And I'm watching as you watching her`
  }];
}
