import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { IsLoadingService } from './services/is-loading.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
// import { ShoppingCartService } from './services/shopping-cart.service';
import { FlightsCartComponent } from './components/flights-cart/flights-cart.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import { ButtonComponent } from './components/button/button.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';


//Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateComponent } from './components/translate/translate.component';
import { CreditCardPipe } from './pipes/credit-card.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')
}


@NgModule({
  declarations: [
    LoaderComponent,
    FlightsCartComponent,
    ButtonComponent,
    TranslateComponent,
    CreditCardPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MdbCarouselModule,
    MatGridListModule,
    MatBadgeModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory : (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    )

  ],
  providers: [
    IsLoadingService,
  ],
  exports : [
    LoaderComponent,
    FlightsCartComponent,
    ButtonComponent,
    TranslateComponent
  ]
})
export class SharedModule { }
