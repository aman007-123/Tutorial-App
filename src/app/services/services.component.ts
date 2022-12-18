import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  users: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getUsers();
    
  }
  getUsers() {
    this.api.getData().subscribe({ 
      next: (res) => {
      this.users = res;
      console.table(this.users);
    },
  error:(err) =>{
    alert('error on fetching data');
  },
  });
  }
}
