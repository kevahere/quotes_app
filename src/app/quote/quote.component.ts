import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [];

  newQuote(myQuote) {
    this.quotes.push(myQuote)
  }

  deleteQuote(i) {
    if (confirm("Are you sure")) {
      this.quotes.splice(i, 1)
    }
  }

  addNewGoal(quote){
       let quoteLength = this.quotes.length;
       quote.id=quoteLength+1;
       this.quotes.push(quote)

   }
  constructor() { }

  ngOnInit() {

  }

}
