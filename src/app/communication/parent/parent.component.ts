import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childData = 'hi';
  constructor() { }

  ngOnInit(): void {
  }
  parentMethod(data:any){
    this.childData = data;
  }

}
