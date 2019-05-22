import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Widget } from './widget';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.sass' ]
} )
export class AppComponent implements OnInit {
  data = new Widget();
  message: string;
  counter: number;
  wasClaimed = false;
  btnText = 'Claim now';

  constructor( private httpService: HttpService ) {}

  ngOnInit(): void {
    this.getMessage();
    this.countdown();
  }

  getMessage() {
    this.httpService.getData().subscribe( ( data ) => {
      this.data = data;
      this.message = `${ data.amount } ${ data.prize } on ${ data.game }`;
    } );
  }

  countdown() {
    this.httpService.getData()
      .subscribe( value => this.counter = value.countdown );
    const interval = setInterval( () => {
      this.counter --;
      if ( this.counter <= 0 ) {
        clearInterval( interval );
        this.counter = 0;
      }
    }, 1000 );
  }

  onClaim() {
    this.message = `You've ${ this.data.amount } ${ this.data.prize } to use now`;
    this.counter = 0;
    this.wasClaimed = true;
  }
}
