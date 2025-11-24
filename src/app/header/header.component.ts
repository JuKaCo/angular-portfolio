import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['es', 'en']);
    translateService.setDefaultLang('en');
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
