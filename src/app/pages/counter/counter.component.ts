import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected minValue: number = 0;
  protected maxValue: number = 10;
  protected counter: number = 0;

  protected increment(): void {
    if (this.counter === this.maxValue) return;
    this.counter++;
  }

  protected decrement(): void {
    if (this.counter === this.minValue) return;
    this.counter--;
  }
}
