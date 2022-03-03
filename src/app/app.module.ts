import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { FormService } from './shared/services/form.service';
import { AboutModule } from './pages/about/about.module';
import { AdminModule } from './pages/admin/admin.module';
import { FlightsModule } from './pages/flights/flights.module';
import { HomeModule } from './pages/home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// //Traductor
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json')
// }



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    HomeModule,
    FlightsModule,
    AdminModule,
    AboutModule,
    MdbCheckboxModule,
    FontAwesomeModule,
    //Traductor
    // HttpClientModule,
    // TranslateModule.forRoot(
    //   {
    //     loader: {
    //       provide: TranslateLoader,
    //       useFactory : (createTranslateLoader),
    //       deps: [HttpClient]
    //     }
    //   }
    // )
  ],
  providers: [
    FormService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
