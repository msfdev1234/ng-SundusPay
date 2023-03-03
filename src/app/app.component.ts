import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-SundusPay';

  /**
   *
   */
  constructor(private router:Router, private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
    
  }
}
