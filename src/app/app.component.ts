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
  
  constructor(private router:Router,private appConstants:Constants,
    private translateService:TranslateService){
    
    this.translateService.use(appConstants.defaultLanguage)
    
  }
  ngOnInit(){
    this.router.navigate(['/home'])
  }
}