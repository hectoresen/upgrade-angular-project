import { flightModel } from './../../../shared/models/flightModel';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CallToApiService {

  public page: number = 1;



  private flightsList: BehaviorSubject<flightModel[]> = new BehaviorSubject<flightModel[]>([])
  constructor(private httpClient: HttpClient) { }

  getFlightsList():Observable<flightModel[]>{
    return this.flightsList.asObservable();
  }


  getFlightsOfApi(numPage: number): Observable<any>{
    return this.httpClient.get(`https://my-json-server.typicode.com/jralcor/flightRepositiry${numPage}/db`).pipe(map((response: any) =>{
      this.flightsList.next(response.flights)
    }))
  }

}
