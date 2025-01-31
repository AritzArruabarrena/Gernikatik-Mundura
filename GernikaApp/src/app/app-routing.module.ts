import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'marihitzegiten',
    loadChildren: () => import('./marihitzegiten/marihitzegiten.module').then( m => m.MarihitzegitenModule)
  },
  {
    path: 'peruhitzegiten',
    loadChildren: () => import('./peruhitzegiten/peruhitzegiten.module').then( m => m.PeruhitzegitenModule)
  },
  {
    path: 'kartakaurkitu',
    loadChildren: () => import('./kartakaurkitu/kartakaurkitu.module').then( m => m.KartakaurkituPageModule)
  },
  {
    path: 'galderak-erantzuten',
    loadChildren: () => import('./galderak-erantzuten/galderak-erantzuten.module').then( m => m.GalderakErantzutenPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
