import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../counter/counter.component.html',
  styleUrls: ['../counter/counter.component.scss']
})
export class CounterComponent {

  counter: number = 10;

  increaseBy = (value: number): void => {
    if (value >= 0) {
      this.counter ++;
    }
    else {
      this.counter --;
    }
  };

  reset = ():void => {
    this.counter = 10;
  }
}
