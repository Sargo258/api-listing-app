import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/character', pathMatch: 'full' },
  {
    path: 'character',
    loadComponent: () => import('./components/character-list/character-list.component').then(m => m.CharacterListComponent)
  }
];
