import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorePageComponent} from "./store-page.component";
import {IonicModule} from "@ionic/angular";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [StorePageComponent],
  exports: [
    StorePageComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule
    ]
})
export class StorePageModule { }
