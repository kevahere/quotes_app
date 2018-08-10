import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    quotes = [
      new Quote(1,"Misery loves company","Le Miserable"),
      new Quote(2,"You can sleep when you die","Taheed Epps"),
      new Quote(3,"Simba mwenda pole ndiye mla nyama","Snoop Lion"),
    ];
  }
