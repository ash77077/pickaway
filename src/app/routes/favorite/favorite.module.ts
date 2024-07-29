import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteRoutingModule } from 'src/app/routes/favorite/favorite-routing.module';
import { FavoriteComponent } from 'src/app/routes/favorite/components/favorite/favorite.component';


@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule {
}
