import {Component} from '@angular/core';
import {STORES_BY_PRODUCTS} from "../../core/constants/app.mock";

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent {
  selectedAddress: string = ''
  isAddressOpen: boolean = true;
  coffees: any = STORES_BY_PRODUCTS[0].coffees
  addresses: any[] = [
    {address: 'Hanrapetutyan 8', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'Teryan 45', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'V. Sargsyan', selected: false, time: '10:00-21:30'},
    {address: 'Isahakyan 7', selected: false, time: '10:00-21:30'}
  ]

  constructor() {
  }

  selectAddress(item: any) {
    this.addresses.forEach(e => e.selected = false)
    this.selectedAddress = item.address;
    item.selected = true;
    this.isAddressOpen = false;
  }
}
