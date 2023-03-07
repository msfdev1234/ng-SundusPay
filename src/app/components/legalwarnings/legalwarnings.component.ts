import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-legalwarnings',
  templateUrl: './legalwarnings.component.html',
  styleUrls: ['./legalwarnings.component.css']
})
export class LegalwarningsComponent {

  constructor(private appComponent:AppComponent) {

  }

  ngOnInit(): void {
    this.appComponent.setAppTitle("Sunduspay: Legal");
    this.appComponent.showLoadingBar();
  }
}
