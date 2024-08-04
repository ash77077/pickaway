import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoresComponent} from "./components/stores/stores.component";
import {StoresRoutingModule} from "./stores-routing.module";
import {IonicModule} from "@ionic/angular";
import {StorePageModule} from "../../shared/store-page/store-page.module";
import {CoffeePageComponent} from "./components/coffee-page/coffee-page.component";


@NgModule({
  declarations: [
    StoresComponent,
    CoffeePageComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    IonicModule,
    StorePageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoresModule {
}
