import {Component} from '@angular/core';
import {OrderComponent} from 'src/app/shared/order/order.component';
import {ModalController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {STORES_BY_PRODUCTS} from "../../../../core/constants/app.mock";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  protected readonly modalComponent = OrderComponent;
  protected readonly STORES_BY_PRODUCTS = STORES_BY_PRODUCTS;
  public isHome: boolean = true;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  async openModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: this.modalComponent,
      breakpoints: [0.1, 0.5, 0.99],
      initialBreakpoint: 0.5,
      backdropDismiss: false,
      backdropBreakpoint: 0.5
    });
    return await modal.present();
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  public openStore(item: any): void {
    this.isHome = !this.isHome;
  }
}
