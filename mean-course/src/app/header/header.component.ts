import { Component } from '@angular/core';

// this is a decorator
// takes configuration via object like adding template
@Component({
  selector: 'app-header', // names how to reference this in the app.component.html
  templateUrl: './header.component.html',
})
export class HeaderComponent {
}
