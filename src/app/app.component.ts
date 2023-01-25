import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './configs/app.config';

@Component({
  selector: 'ion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IonCareer';
  param = {value: 'world'};
  constructor(private readonly router:Router,private readonly appConstants:Constants,
    private readonly translateService:TranslateService){
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(appConstants.defaultLanguage);
  }
  ngOnInit(){
    this.router.navigate(['/home'])
  }
}
