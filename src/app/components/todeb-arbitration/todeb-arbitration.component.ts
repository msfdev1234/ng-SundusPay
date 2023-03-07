import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-todeb-arbitration',
  templateUrl: './todeb-arbitration.component.html',
  styleUrls: ['./todeb-arbitration.component.css']
})
export class TodebArbitrationComponent {

  constructor(private appComponent:AppComponent) {

  }

  ngOnInit(): void {
    this.appComponent.setAppTitle("Sunduspay: TÖDEB HAKEM HEYETİ");
    this.appComponent.showLoadingBar();
  }

}
