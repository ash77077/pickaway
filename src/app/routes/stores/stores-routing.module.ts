import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoresComponent} from "./components/stores/stores.component";
import {StorePageComponent} from "../../shared/store-page/store-page.component";

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  },
  {
    path: 'coffee/:id',
    component: StorePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule {
}
