import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>{{content | json}}</div>
  `
})
export class TestComponent {
  @Input() content: any;
}
