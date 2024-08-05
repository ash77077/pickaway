import {Component, DestroyRef} from '@angular/core';
import {OrderComponent} from 'src/app/shared/order/order.component';
import {ModalController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {STORES_BY_PRODUCTS} from "../../../../core/constants/app.mock";
import {HomeService} from "../../services/home.service";
import {IAddress, IStore} from "../../../../core/models/product.model";
import {storeSlideCount} from "../../../../core/constants/app.constants";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  protected readonly STORES_BY_PRODUCTS = STORES_BY_PRODUCTS;
  public stores: IStore[]
  public isHome: boolean = true;
  public selectedStore: IStore = null;
  public selectedStoreAddresses: IAddress[];
  private storeReqQuery: { [p: string]: string | number } = {
    limit: storeSlideCount
  }

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private homeService: HomeService,
    private destroyRef: DestroyRef
  ) {
    this.translate.setDefaultLang('en');
    this.getStores();
  }

  getStores(): void {
    this.homeService.getStores(this.storeReqQuery)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((d: any): void => this.stores = d)
  }

  async openModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: OrderComponent,
      breakpoints: [0.1, 0.5, 0.99],
      initialBreakpoint: 0.5,
      backdropDismiss: false,
      backdropBreakpoint: 0.5
    });
    return await modal.present();
  }

  public openStore(item: IStore): void {
    this.homeService.getAddressesByStoreId(item._id).subscribe((addr: IAddress[]): void => {
      this.selectedStoreAddresses = addr;
      if (!this.selectedStore || this.selectedStore.id !== item.id) {
        this.selectedStore = item;
        this.isHome = false;
      } else {
        this.isHome = true;
        this.selectedStore = null;
      }

    })
  }

  addToFavorite(e: MouseEvent, product: any) {
    e.stopPropagation();
    product.isFavorite = !product.isFavorite
  }
}
