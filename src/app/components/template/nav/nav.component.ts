import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor (private showService: ShowService){}
  show?:boolean

  ngDoCheck(){
    this.show = this.showService.showSide
  }
}
