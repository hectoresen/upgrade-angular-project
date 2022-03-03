import { AdminModule } from './pages/admin/admin.module';
import { FlightsModule } from './pages/flights/flights.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./pages/flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path: 'gestion',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
