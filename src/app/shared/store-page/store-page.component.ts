import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {STORES_BY_PRODUCTS} from "../../core/constants/app.mock";
import {IStore} from "../../core/models/product.model";

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnChanges{
  @Input() selectedStore: IStore;

  public selectedAddress: string = ''
  public isAddressOpen: boolean = true;
  public coffees: any = STORES_BY_PRODUCTS[0].coffees
  public addresses: any[] = [
  ]

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStoreId']?.currentValue !== changes['selectedStoreId']?.previousValue) {
      this.isAddressOpen = true;
      this.selectedAddress = null;
    }
  }

  selectAddress(item: any) {
    this.addresses.forEach(e => e.selected = false)
    this.selectedAddress = item.address;
    item.selected = true;
    this.isAddressOpen = false;
  }
}
