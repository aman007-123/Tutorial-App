import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  childMessage: string = '';

  receiveMessage(msg: string) {
    this.childMessage = msg;
  }
}
