import { Component } from '@angular/core';

@Component({
  selector: 'app-count-child',
  templateUrl: './count-child.component.html',
  styleUrls: ['./count-child.component.css']
})
export class CountChildComponent {
  public count = 0;
  public message = '';


  incerement() {
   this.count = this.count+1 
   this.message = `Count is ${this.count}`
  }

  decrement() {
    this.count = this.count - 1
    this.message = `Count is ${this.count}`
  }
}
