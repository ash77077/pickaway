import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoresComponent} from "./components/stores/stores.component";
import {StoresRoutingModule} from "./stores-routing.module";
import {IonicModule} from "@ionic/angular";
import {StorePageModule} from "../../shared/store-page/store-page.module";


@NgModule({
  declarations: [StoresComponent],
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
