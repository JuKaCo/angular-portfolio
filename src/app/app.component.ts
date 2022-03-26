import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en','es']);
    translateService.setDefaultLang('en');
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }
}
