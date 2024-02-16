import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ElementRef } from '@angular/core';
interface user {
  name:string
  status:string
}
@Component({
  selector: 'app-child-input-component',
  templateUrl: './child-input-component.component.html',
  styleUrls: ['./child-input-component.component.css']
})
export class ChildInputComponentComponent implements OnChanges{
  @Input() getName: string='';
  @Input() getStatus: string='';
  @Input() getNewEmpObj: user[]=[];
  @Output() sendTextToParent=new EventEmitter<string>();

  constructor(private readonly eleRef:ElementRef){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['getName']){
      this.getName = changes['getName'].currentValue.toUpperCase()
    }
    if(changes['getStatus']){
      this.getStatus = changes['getStatus'].currentValue.toUpperCase()
    }
    // if(changes['getNewEmpObj']){
    // //   this.getStatus = changes['getNewEmpObj'].currentValue.toUpperCase()
    // // console.log(Object.keys(changes['getNewEmpObj'].currentValue));
    // }
  }
  

  sendTitle(title:string){
    this.sendTextToParent.emit(title)
  }

}
