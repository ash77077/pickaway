import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public count: number = 0;

  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }


  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}
