import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/routes/home/components/home/home.component';

import { HomePageRoutingModule } from './home-routing.module';
import { OrderModule } from 'src/app/shared/order/order.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    OrderModule,
    TranslateModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
