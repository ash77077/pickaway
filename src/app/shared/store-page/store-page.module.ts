import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorePageComponent} from "./store-page.component";
import {IonicModule} from "@ionic/angular";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [StorePageComponent],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule
    ],
  exports: [
    StorePageComponent
  ],
})
export class StorePageModule { }
