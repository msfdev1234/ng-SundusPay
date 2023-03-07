import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage!: string;
  currentRoute!: string;

  /**
   *
   */
  constructor(@Inject(LOCALE_ID) public locale: string) {
    console.log(locale);

  }






}
