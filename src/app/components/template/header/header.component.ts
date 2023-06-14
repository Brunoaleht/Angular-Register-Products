import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private showService: ShowService, private headerService: HeaderService){}
  
  setShow(){
    this.showService.setShowSide()
  }

  get title(): string{
    return this.headerService.headerData.title
  }
  get icon(): string{
    return this.headerService.headerData.icon
  }
  get routeUrl(): string{
    return this.headerService.headerData.routeUrl
  }
}
