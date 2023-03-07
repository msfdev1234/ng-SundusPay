import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css']
})
export class CookiePolicyComponent implements OnInit{

  constructor(private appComponent:AppComponent) {

  }


  ngOnInit(): void {
    this.appComponent.showLoadingBar();
    this.appComponent.setAppTitle("Sunduspay: Cookie Policy");
  }
}
