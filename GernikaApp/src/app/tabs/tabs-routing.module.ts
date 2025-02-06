import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'marihitzegiten',
        loadChildren: () => import('../marihitzegiten/marihitzegiten.module').then(m => m.MarihitzegitenModule)
      },
      {
        path: 'peruhitzegiten',
        loadChildren: () => import('../peruhitzegiten/peruhitzegiten.module').then(m => m.PeruhitzegitenModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'kartakaurkitu',
        loadChildren: () => import('../kartakaurkitu/kartakaurkitu.module').then(m => m.KartakaurkituPageModule)
      },
      {
        path: 'hizkisopa',
        loadChildren: () => import('../hizkisopa/hizkisopa.module').then(m => m.HizkisopaPageModule)
      },
      {
        path: 'galderak-erantzuten',
        loadChildren: () => import('../galderak-erantzuten/galderak-erantzuten.module').then(m => m.GalderakErantzutenPageModule)
      },
      {
        path: 'marijesia-ordenatu',
        loadChildren: () => import('../marijesia-ordenatu/marijesia-ordenatu.module').then(m => m.MarijesiaOrdenatuPageModule)
      },
      {
        path: 'produktu-puzzle',
        loadChildren: () => import('../produktu-puzzle/produktu-puzzle.module').then(m => m.ProduktuPuzzlePageModule)
      },
      {
        path: 'pertsonak-puzzle',
        loadChildren: () => import('../pertsonak-puzzle/pertsonak-puzzle.module').then(m => m.PertsonakPuzzlePageModule)
      },
      {
        path: 'ontziak-hondaratzen',
        loadChildren: () => import('../ontziak-hondaratzen/ontziak-hondaratzen.module').then(m => m.OntziakHondaratzenPageModule)
      },
      {
        path: 'marijesiak-hutsuneak-bete',
        loadChildren: () => import('../marijesiak-hutsuneak-bete/marijesiak-hutsuneak-bete.module').then(m => m.MarijesiakHutsuneakBetePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TabsPageRoutingModule {}
