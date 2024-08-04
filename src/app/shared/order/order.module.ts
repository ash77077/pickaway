import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from 'src/app/shared/order/order.component';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [OrderComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class OrderModule {
}
