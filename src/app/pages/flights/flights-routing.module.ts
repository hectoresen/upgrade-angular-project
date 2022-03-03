import { FlightsDetailComponent } from './flights-detail/flights-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsCartComponent } from 'src/app/shared/components/flights-cart/flights-cart.component';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'cart', component: FlightsCartComponent},
  {path: ':flightId', component: FlightsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
