import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent implements OnInit {
  userData: any = [];

  states = [
    'Madhya Pradesh',
    'Maharashtra',
    'Chandigrah',
    'Uttar Pradesh',
    'Karnataka',
    'Tamilnadu',
    'Gujarat',
    'Kolkata',
  ];

  constructor(private api: ApiService, private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(item: any) {
    this.http.post<any>('http://localhost:3000/formData', item).subscribe(
      (res) => {
        this.userData.reset();
        alert('Data added successfully');
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  getUserData() {
    this.api.getFormData().subscribe((res) => {
      this.userData = res;
      console.log(res);
    });
  }
}
