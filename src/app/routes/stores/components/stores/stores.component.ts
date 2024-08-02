import { Component } from '@angular/core';
import {STORES_BY_PRODUCTS} from "../../../../core/constants/app.mock";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent   {
  coffees: any = STORES_BY_PRODUCTS[0].coffees
  constructor() { }



}
