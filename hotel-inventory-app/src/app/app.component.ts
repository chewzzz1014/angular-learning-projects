import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',

  // use backticks for multiline
  template: `
  <h1>Hello World from inline template</h1>
  <p>Angular is awesome!</p>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-inventory-app';
}
