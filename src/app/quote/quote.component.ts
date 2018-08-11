import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
 })
export class QuoteComponent implements OnInit {
  quotes = [

    new Quote(1, "Misery loves company", "Le Miserable"),
    new Quote(2, "You can sleep when you die", "Taheed Epps"),
    new Quote(3, "Simba mwenda pole ndiye mla nyama", "Snoop Lion"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
