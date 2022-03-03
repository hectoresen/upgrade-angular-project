import { PipePricePipe } from './../../shared/pipes/pipe-price.pipe';
import { CallWeatherApiService } from './services/call-weather-api.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './gallery/card/card.component';

//Material
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator'

//Services
import { CallToApiService } from './services/call-to-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightsDetailComponent } from './flights-detail/flights-detail.component';
import { FinderComponent } from './gallery/card/finder/finder.component';
import { SubBarComponent } from './gallery/sub-bar/sub-bar.component';

@NgModule({
  declarations: [
    GalleryComponent,
    CardComponent,
    FlightsDetailComponent,
    FinderComponent,
    SubBarComponent,
    PipePricePipe
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatPaginatorModule,
  ],
  providers: [
    CallToApiService, CallWeatherApiService,
  ],
})
export class FlightsModule {}
