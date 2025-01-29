import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'marihitzegiten',
    loadChildren: () => import('./marihitzegiten/marihitzegiten.module').then( m => m.MarihitzegitenModule)
  },
  {
    path: 'peruhitzegiten',
    loadChildren: () => import('./peruhitzegiten/peruhitzegiten.module').then( m => m.PeruhitzegitenModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
