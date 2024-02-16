import { Component } from '@angular/core';

interface user {
  name:string
  status:string
}
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
 public empName: any='' ;
 public empStatus: any='';
 public newEmpObj:user[] = []
 public title:string='Parent-Component'



  onSubmit(userName: string,userStaus:string) {
    this.empName = userName
    this.empStatus = userStaus
    this.newEmpObj.push({name:userName,status:userStaus})
  }
  giveTitle(res:string){
    this.title = res
  }
}
