import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LegalwarningsComponent } from './components/legalwarnings/legalwarnings.component';
import { SafetyforComponent } from './components/safetyfor/safetyfor.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FaqComponent } from './components/faq/faq.component';
import { BranchesComponent } from './components/branches/branches.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { SearchtransferComponent } from './components/searchtransfer/searchtransfer.component';

import {NgxCaptchaModule} from  '@binssoft/ngx-captcha';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { KVKKComponent } from './components/kvkk/kvkk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutusComponent,
    LegalwarningsComponent,
    SafetyforComponent,
    ContactusComponent,
    FaqComponent,
    BranchesComponent,
    CookiePolicyComponent,
    SearchtransferComponent,
    CalculatorComponent,
    KVKKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    NgxCaptchaModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
