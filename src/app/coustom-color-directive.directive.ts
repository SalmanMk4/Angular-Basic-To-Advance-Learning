import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCoustomColorDirective]'
})
export class CoustomColorDirectiveDirective {

  constructor(private readonly el: ElementRef) { }

  public changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
