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
    path: 'pay',
    loadComponent: () => import('./modules/pay/pay.page').then( m => m.PayPage)
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
  {
    path: 'market',
    loadComponent: () => import('./modules/market/market.page').then( m => m.MarketPage)
  },

  // {
  //   path: 'user-info',
  //   loadComponent: () => import('./components/info-usuario/info-usuario.component').then( m => m.InfoUsuarioComponent),
  // },
];
