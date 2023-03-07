import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private appComponent:AppComponent) {

  }


  ngOnInit(): void {
    this.appComponent.setAppTitle("About us");
    this.appComponent.showLoadingBar();
  }

}
