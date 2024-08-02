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
    {address: 'Hanrapetutyan 8', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'Teryan 45', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'V. Sargsyan', selected: false},
    {address: 'Isahakyan 7', selected: false}
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
