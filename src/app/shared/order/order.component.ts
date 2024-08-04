import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ICoffees} from "../../core/models/product.model";
import {MENU_ITEMS} from "../../core/constants/app.constants";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public count: number = 0;
  @Input() orderData: ICoffees;
  protected readonly MENU_ITEMS: any[] = MENU_ITEMS;
  orderGroup: FormGroup;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {
    this.orderGroup = this.fb.group({
      count: new FormControl(1)
    })
  }

  closeModal() {
    this.modalController.dismiss();
  }


  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  orderActions(number: number) {

  }
}
