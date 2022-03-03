import { PipePricePipe } from './../../../shared/pipes/pipe-price.pipe';
import { FormService } from './../../../shared/services/form.service';
import { WeatherData } from './../../../shared/models/weatherModel';
import { CallWeatherApiService } from './../services/call-weather-api.service';

import { IsLoadingService } from './../../../shared/services/is-loading.service';
import { flightModel } from './../../../shared/models/flightModel';
import { CallToApiService } from './../services/call-to-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-flights-detail',
  templateUrl: './flights-detail.component.html',
  styleUrls: ['./flights-detail.component.scss'],
})
export class FlightsDetailComponent implements OnInit {

  flightDetail: flightModel = {
    id: "",
    origin: "",
    destination: "",
    company: "",
    price: 0,
    departureTime : 0,
    arrivalTime: 0,
    flightData: 0,
    directFlight: true,
    scales: {
      firstScale: "",
      secondScale: "",
    },
    companyLogo: "",
    cityImg: "",
    handLugagge: "",
  };

  listApi: flightModel[];
  params$: Subscription;
  ryanair: boolean = false;
  vueling: boolean = false;
  iberia: boolean = false;
  page:number = 1;

  pruebaTiempo: WeatherData[] = [];

  showScale = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: CallToApiService,
    private isLoadingService: IsLoadingService,
    private dataWeather: CallWeatherApiService,
  ) {}

  ngOnInit(): void {
    this.page = this.apiService.page;
    this.isLoadingService.setShowLoading(true);
    /* Cambiar parámetro de llamada */
    this.apiService.getFlightsOfApi(this.page).subscribe();
    this.getFlights();
    this.isLoadingService.setShowLoading(false);
    this.companyLogo();
    this.getDataWeather('Lugo');
  }

  getFlights(): void {
    this.apiService.getFlightsList().subscribe((data: flightModel[]) => {
      this.listApi = data;
      this.params$ = this.route.paramMap.subscribe((params) => {
        const flightId = params.get('flightId');
        this.flightDetail = this.listApi.find(
          (flight) => flight.id == flightId
        )!;
        console.log(this.flightDetail?.company)
        if(this.flightDetail?.company === 'Ryanair'){
          this.ryanair = !this.ryanair
        }else if(this.flightDetail?.company === 'Vueling'){
          this.vueling = !this.vueling
        }else if(this.flightDetail?.company === 'Iberia'){
          this.iberia = !this.iberia
        };
        if(this.flightDetail?.scales.firstScale){
          this.showScale = true;
        };
        this.getDataWeather(this.flightDetail?.destination);
      });
    });
  }

  companyLogo() :void{
    if(this.flightDetail?.company === 'Ryanair'){
      this.ryanair = !this.ryanair
    }else if(this.flightDetail?.company === 'Vueling'){
      this.vueling = !this.vueling
    }else if(this.flightDetail?.company === 'Iberia'){
      this.iberia = !this.iberia
    }
  };

  getDataWeather(name: string){
    this.dataWeather.getCityWeather(name).subscribe(data =>{
      this.pruebaTiempo = data;
      return this.pruebaTiempo;
    })
  }

}


