import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/model/Branch.model';
import { Timing } from 'src/app/model/Timing.model';
import { Branches, Countries } from 'src/assets/content/static-data';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  countryList: { countryId: number; countryName: string; }[] | undefined;
  branchList: { countryId: number; branchId: number; branchName: string; branchAddress: string; branchEmail: string; branchMobile: string; branchDirection: string; workingHours: { Monday: string; Tuesday: string; Wednesday: string; Thursday: string; Friday: string; Saturday: string; Sunday: string; }[]; }[] | undefined;

  currentBranch: any;


  ngOnInit() {
    this.countryList = Countries;
    console.log(this.countryList);
    this.branchList = Branches.filter(branch => branch.countryId == 100);
   // this.currentBranch = this.branchList.find(branch => branch.branchId == 1);
  }

  country!: any[];
  branch!: any[];

  onCountrySelected(state: any) {

    this.branchList = Branches.filter(branch => branch.countryId == state.target.value);

    console.log(this.branchList);

  }

  onBranchSelect(state: any) {

    this.currentBranch = Branches.find(branch => branch.branchId == state.target.value)

    console.log(this.currentBranch);
  }

  // updateBranches(id: any): void {

  //   // this.branchList =Branches.filter(list => list.countryId === 102);
  // }

  // this.branch1 = new Branch("Hyderabad", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  // new Timing("9:00AM-5:00PM", "9:00AM-5:00PM", "9:00AM-5:00PM", "9:00AM-5:00PM", "9:00AM-5:00PM", "9:00AM-5:00PM", "9:00AM-5:00PM"));

}
