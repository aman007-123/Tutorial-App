import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  text = 'It is used to add or remove any DOM element';
  values = ['It', 'is', 'used', 'to', 'loop', 'through', 'arrays'];
  showText = true;
  isActive = true;
  fontSize = 18;
  bgColor = 'lightblue';
  color = 'red';
  constructor() {}

  ngOnInit(): void {}
}
