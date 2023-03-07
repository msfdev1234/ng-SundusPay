import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BranchesComponent } from './components/branches/branches.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { FaqComponent } from './components/faq/faq.component';
import { IndexComponent } from './components/index/index.component';
import { KVKKComponent } from './components/kvkk/kvkk.component';
import { LegalwarningsComponent } from './components/legalwarnings/legalwarnings.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SafetyforComponent } from './components/safetyfor/safetyfor.component';
import { SearchtransferComponent } from './components/searchtransfer/searchtransfer.component';
import { TodebArbitrationComponent } from './components/todeb-arbitration/todeb-arbitration.component';


const routes: Routes = [{ path: 'index', component: IndexComponent },
{ path: '', component: IndexComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'legalwarnings', component: LegalwarningsComponent },
{ path: 'safetyfor', component: SafetyforComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'faq', component: FaqComponent },
{ path: 'branches', component: BranchesComponent },
{ path: 'cookypolicy', component: CookiePolicyComponent },
{ path: 'searchtransfer', component: SearchtransferComponent },
{ path: 'calculator', component: CalculatorComponent },
{ path: 'kvkk-politikamiz', component: KVKKComponent },
{ path: 'TÖDEB-hakem-heyeti', component: TodebArbitrationComponent },
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
