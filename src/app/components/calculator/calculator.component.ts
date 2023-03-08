import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calciForm!: FormGroup;
  isSelectedValue1! : boolean;
  isSelectedValue2! : boolean;
  currentSelect! : number;

  constructor(private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.isSelectedValue1 = false;
    this.isSelectedValue2 = false;

    this.calciForm = new FormGroup({
      value1Input: new FormControl(),

      value2Input: new FormControl(),
    })

    this.appComponent.setAppTitle("Calculator");
    this.appComponent.showLoadingBar();

  }

  value1Changed() {
    
    this.currentSelect = 0;
    console.log("current select " + this.currentSelect)

  }

  value2Changed() {

    this.currentSelect = 1;
    console.log("current select " + this.currentSelect)

  }

  onSubmit(){
    console.log("asf")

    if(this.currentSelect == 0){
   
        this.calciForm.controls['value2Input'].setValue((this.calciForm.value.value1Input*18.83).toFixed(2));


    }else if(this.currentSelect == 1){
     

        this.calciForm.controls['value1Input'].setValue((this.calciForm.value.value2Input/18.83).toFixed(2));

    }

  }

  example() {
    alert("afsa")
  }

}
