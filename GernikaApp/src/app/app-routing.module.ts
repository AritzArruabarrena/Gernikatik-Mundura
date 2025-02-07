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
  },
  {
    path: 'hizkisopa',
    loadChildren: () => import('./hizkisopa/hizkisopa.module').then( m => m.HizkisopaPageModule)
  },
  {
    path: 'marijesia-ordenatu',
    loadChildren: () => import('./marijesia-ordenatu/marijesia-ordenatu.module').then( m => m.MarijesiaOrdenatuPageModule)
  },
  {
    path: 'produktu-puzzle',
    loadChildren: () => import('./produktu-puzzle/produktu-puzzle.module').then( m => m.ProduktuPuzzlePageModule)
  },
  {
    path: 'pertsonak-puzzle',
    loadChildren: () => import('./pertsonak-puzzle/pertsonak-puzzle.module').then( m => m.PertsonakPuzzlePageModule)
  },
  {
    path: 'ontziak-hondaratzen',
    loadChildren: () => import('./ontziak-hondaratzen/ontziak-hondaratzen.module').then( m => m.OntziakHondaratzenPageModule)
  },
  {
    path: 'marijesiak-hutsuneak-bete',
    loadChildren: () => import('./marijesiak-hutsuneak-bete/marijesiak-hutsuneak-bete.module').then( m => m.MarijesiakHutsuneakBetePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
