import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  uname = '';

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  passData() {
    this.notify.emit('This value is coming form child');
  }

  constructor() {}

  ngOnInit(): void {}
}
