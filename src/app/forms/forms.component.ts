import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openTDF(){
    this.route.navigate(['tdf']);
  }
  openMDF(){
    this.route.navigate(['reactive']);
  }

}
