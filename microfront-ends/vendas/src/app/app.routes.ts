import { Routes } from '@angular/router';
import { Home } from './home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [

  {
    path: 'produtos',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    }).then( m => m.App)
  },
  {
    path: 'carrinho',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Carrinho'
    }).then( m => m.Carrinho)
  },
  {
    path: 'grafico',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component'
    }).then( m => m.App)
  },

  {path: 'home', component: Home},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
