import { WeatherData } from './../../../shared/models/weatherModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable()
export class CallWeatherApiService {

  constructor(private httpCient: HttpClient) { }

  weatherData: WeatherData[] = [];


  getCityWeather(name:string): Observable<any>{
    return this.httpCient.get(`http://api.weatherapi.com/v1/current.json?key=c90fc24b86f747a7ba1174035210712&q=${name}&aqi=no`)
    .pipe(
      map((response) =>{
        console.log('Esto es la respuesta',response);
        const current:any = [];
        current.push(response)
        console.log('Respuesta en array',current);

        current.forEach((element:any) =>{
          this.weatherData = [{
            name: element.current.name,
            temp_c: element.current.temp_c,
            is_day: element.current.is_day,
            condition: {
              text: element.current.condition.text,
              icon: element.current.condition.icon
            },
            precip_mm: element.current.precip_mm,
            precip_in: element.current.precip_in,
            cloud: element.current.cloud
          }]
        })
        return this.weatherData;
      })
    )
  }
}

