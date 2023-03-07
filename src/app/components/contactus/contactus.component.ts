import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  /**
   *
   */
  constructor(private appComponent:AppComponent) {

  }


  ngOnInit(): void {
    this.appComponent.setAppTitle("Sunduspay: Contact us");
    this.appComponent.showLoadingBar();
  }

}
