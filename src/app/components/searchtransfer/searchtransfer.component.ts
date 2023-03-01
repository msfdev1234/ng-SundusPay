import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgxCaptchaService } from '@binssoft/ngx-captcha'

import { Transfers } from 'src/assets/content/static-data';

@Component({
  selector: 'app-searchtransfer',
  templateUrl: './searchtransfer.component.html',
  styleUrls: ['./searchtransfer.component.css']
})
export class SearchtransferComponent implements OnInit {
  captchaStatus: any = null;

  transferForm!: FormGroup;

  transferList: { transferID: number; senderName: string; senderMobile: string; recieverName: string; recieverMobile: string; action: string; }[] | undefined;

  currentTransfer: any;
  checkTransfer: any;


  constructor(private captchaService: NgxCaptchaService, private formBuilder: FormBuilder,) { }

  ngOnInit() {

    // this.transferList = Transfers;

    this.transferForm = new FormGroup({
      transferIdInput: new FormControl(null, [Validators.required, Validators.minLength(3)]),

      senderMobileInput: new FormControl(null, [Validators.required, Validators.minLength(3)]),

      recieverMobileInput: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })

    this.captchaService.captchStatus.subscribe((status) => {
      this.captchaStatus = status;
      if (status == false) {
        alert("Opps!\nCaptcha mismatch");
      } else if (status == true) {
        alert("Success!\nYou are right");
      }
    });
  }

  onFormSubmit(): void {
    if (this.transferForm.invalid) {
      alert("Invalid")
      return;
    }
    // console.log(this.transferForm.value)
    
    this.checkTransfer = Transfers.find(transfer => transfer.transferID == this.transferForm.value.transferIdInput)
  //  console.log(this.currentTransfer);

    if (this.checkTransfer != undefined) {
      if (this.transferForm.value.transferIdInput == this.checkTransfer.transferID &&
        this.transferForm.value.senderMobileInput == this.checkTransfer.senderMobile &&
        this.transferForm.value.recieverMobileInput == this.checkTransfer.recieverMobile) {

        

          this.currentTransfer = this.checkTransfer;
          console.log(this.currentTransfer)
      } else{
        alert("Invalid Mobile Input")
      }
    }else{
      alert("Invalid Transfer Id Input")
    }
  }

}

