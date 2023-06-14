import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

  showSide: boolean = false;

  setShowSide(){
    this.showSide = !this.showSide;
  }
}
