import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoresComponent} from "./components/stores/stores.component";
import {CoffeePageComponent} from "./components/coffee-page/coffee-page.component";

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  },
  {
    path: 'product/:id',
    component: CoffeePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule {
}
