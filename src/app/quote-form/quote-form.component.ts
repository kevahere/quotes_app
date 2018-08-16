import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote:any
  newQuotewords:string
  newQuoteauthor:string
  newQuotequoter:string
  quote:Quote[];
  //quotes:Quotes;
  @Output()addQuote=new EventEmitter();

  submitQuote(){
  this.newQuote=new Quotes(this.newQuotewords,this.newQuoteauthor,this.newQuotequoter)
    this.addQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit() {
  }

}
