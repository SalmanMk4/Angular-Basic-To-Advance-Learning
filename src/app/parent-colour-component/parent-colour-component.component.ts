import { Component, ViewChild } from '@angular/core';
import { ChildColourComponent } from './child-colour/child-colour.component';
import { CoustomColorDirectiveDirective } from '../coustom-color-directive.directive';

@Component({
  selector: 'app-parent-colour-component',
  templateUrl: './parent-colour-component.component.html',
  styleUrls: ['./parent-colour-component.component.css']
})
export class ParentColourComponentComponent {
@ViewChild(CoustomColorDirectiveDirective) child!: CoustomColorDirectiveDirective;
public color :string='red';
  changingColor(color:any){
    this.child.changeColor(color)
  }
}
