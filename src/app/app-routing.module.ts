import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./routes/favorite/favorite.module').then(m => m.FavoriteModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./routes/stores/stores.module').then(m => m.StoresModule)
  },
  // {
  //   path: 'tab3',
  //   loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  // },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
