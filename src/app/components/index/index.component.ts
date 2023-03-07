import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private appComponent:AppComponent) {

  }


  ngOnInit(): void {
    this.appComponent.setAppTitle("Sunduspay : Money Transfer");
    this.appComponent.showLoadingBar();
  }
}
