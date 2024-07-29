import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent   {

  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }

}
