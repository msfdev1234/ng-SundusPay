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

  loading = false;

  /**
   *
   */
  constructor(private router:Router, private titleService: Title) {
    this.setAppTitle(this.title);
  }

  public setAppTitle(title:string){
    this.titleService.setTitle($localize`${title}`);
  }

  ngOnInit(): void {

  }

  public showLoadingBar(){
    this.loading=true;

    setTimeout(() => {
      this.loading=false;
    }, 500);
  }
}
