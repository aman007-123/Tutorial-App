import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
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

  userForm: any = FormGroup;
  userData: any = [];

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private api: ApiService) {}

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.getUserData();
    
  }
  
  submitForm() {
    // console.log(this.userForm.value);
    this.http
    .post<any>('http://localhost:3000/formData', this.userForm.value)
    .subscribe(
      (res) => {
        this.userForm.reset();
        alert('Data added successfully');
      },
      (err) => {
        alert('Something went wrong');
      }
      );
    }
    
    getUserData(){
      this.api.getFormData().subscribe((res)=>{
      this.userData = res;
      console.log(res);
    })
  }
}
