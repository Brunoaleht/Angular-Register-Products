import { Injectable } from '@angular/core';
import { HeaderDataProps } from '../components/template/header/header-data-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderDataProps>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: '',
  })

  constructor() { }

  get headerData(): HeaderDataProps {
    return this._headerData.value
  }

  set headerData(headerData: HeaderDataProps) {
    this._headerData.next(headerData)
  }
}
