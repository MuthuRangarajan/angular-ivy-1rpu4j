import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styleUrls: [`app.component.css`]
})
export class HelloComponent  {
  @Input() name: string;
}
