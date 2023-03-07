import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-safetyfor',
  templateUrl: './safetyfor.component.html',
  styleUrls: ['./safetyfor.component.css']
})
export class SafetyforComponent {

  
  constructor(private appComponent:AppComponent) {

  }

  ngOnInit(): void {
    this.appComponent.setAppTitle("Sunduspay: For safety");
    this.appComponent.showLoadingBar();
  }
}
