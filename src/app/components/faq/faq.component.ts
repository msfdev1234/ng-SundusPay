import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{

  constructor(private appComponent:AppComponent) {

  }


  ngOnInit(): void {
    this.appComponent.setAppTitle("FAQ'S | Sunduspay");
    this.appComponent.showLoadingBar();
  }

}
