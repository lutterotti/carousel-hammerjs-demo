import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-pagination',
  template: `
    <div style="height: 100px; width: 100px; border: 1px solid red; display: flex; justify-content: center; align-items: center;">{{content.title}}</div>
  `
})
export class TestPaginationComponent {
  @Input() content: any;
}
