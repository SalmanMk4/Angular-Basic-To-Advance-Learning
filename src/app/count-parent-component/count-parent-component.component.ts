import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountChildComponent } from './count-child/count-child.component';

@Component({
  selector: 'app-count-parent-component',
  templateUrl: './count-parent-component.component.html',
  styleUrls: ['./count-parent-component.component.css']
})
export class CountParentComponentComponent implements AfterViewInit{
  @ViewChild(CountChildComponent) countChild!: CountChildComponent;
  
  ngAfterViewInit(): void {
    
  }
  increamentByOne() {
    this.countChild.incerement()
    console.log('hello');
  }
  decrementByOne() {
  this.countChild.decrement()
  }
  reset() {
    this.countChild.count = 0
  }



}
