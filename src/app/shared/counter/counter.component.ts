import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input('title') title = '';
  @Input('obs') obs = '';
  @Input('control') control!: FormControl;

  increase() { this.control.setValue(this.control.value + 1) }
  decrease() { this.control.setValue(this.control.value - 1) }

}
