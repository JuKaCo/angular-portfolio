import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['es','en']);
    translateService.setDefaultLang('en');
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function(): void
      {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
    function(): void
    {
      $('.navbar-collapse').toggle();
    }
  );
  }

}
