import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  name = 'Aman';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  username = '';
  constructor() {}

  ngOnInit(): void {}
  showAlert(){
    alert('Event binding');
  }
}
