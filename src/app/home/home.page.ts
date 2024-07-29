import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
