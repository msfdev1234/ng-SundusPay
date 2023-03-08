import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-kvkk',
  templateUrl: './kvkk.component.html',
  styleUrls: ['./kvkk.component.css']
})
export class KVKKComponent implements OnInit{

  constructor(private appComponent:AppComponent) {}

  ngOnInit(): void {
    this.appComponent.showLoadingBar();
    this.appComponent.setAppTitle("KVKK");
  }

}
