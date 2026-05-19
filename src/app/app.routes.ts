import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./modules/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'producto',
    loadComponent: () => import('./modules/producto/producto.page').then( m => m.ProductoPage)
  },
  {
    path: 'market',
    loadComponent: () => import('./modules/market/market.page').then( m => m.MarketPage)
  },
];
