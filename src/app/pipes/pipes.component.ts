import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  title = 'it is used to transform a string into titlecase';
  upper = 'it is used to transform a string into uppercase';
  lower = 'it is used to transform a string into lowercase';
  money = 2500;
  date = new Date();
  user = {
    fname: 'Aman',
    lname: 'Nema',
    city: 'Jabalpur',
  };

  customPipe = 'this is custom pipe example';

  constructor() {}

  ngOnInit(): void {}
}
