import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
})
export class CommunicationComponent implements OnInit {
  username = 'This value is coming from parent component';
  input =
    'This decorator is used when the communcation is from parent to child component. it informs angular that the value is coming from outside of the current component and to use this decorator it must be added inside child component. It is achieved by property binding.';
  childMessage: string = '';
  constructor() {}

  ngOnInit(): void {}

  receiveMessage(msg: string) {
    this.childMessage = msg;
  }
}
