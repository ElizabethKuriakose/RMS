import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class Pages{
  authRoutes = [ 'login' ];
  sharedRoutes = [ 'home' ];
}
