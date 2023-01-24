import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })

export class Constants {
    defaultLanguage: string;

    constructor() {
      this.defaultLanguage = 'en';
    }
}