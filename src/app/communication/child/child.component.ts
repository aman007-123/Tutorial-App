import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() message: string = '';

  @Output() dataEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.dataEvent.emit('Hello Parent! 👋');
  }
}
