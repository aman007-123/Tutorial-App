import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;

  submitted: boolean = false;
  formData = {
    name: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zip: '',
  };

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

  submitForm() {
    this.submitted = true;
    this.formData.name = this.userForm.value.name;
    this.formData.email = this.userForm.value.email;
    this.formData.password = this.userForm.value.password;
    this.formData.city = this.userForm.value.city;
    this.formData.state = this.userForm.value.state;
    this.formData.zip = this.userForm.value.zip;
    this.userForm.reset();
  }
}
