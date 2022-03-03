import { CallToApiService } from './../../pages/flights/services/call-to-api.service';
import { flightModel } from './../models/flightModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  public information: BehaviorSubject<any> = new BehaviorSubject(null);

  public flightListProob : flightModel[] = [];

  public dateInfo : Date;

  constructor(
    private service: CallToApiService,
  ){}

  getInformationObservable(): Observable<flightModel> {
    return this.information.asObservable();
  }

  setInformationObservable(inf: flightModel): void {
    this.information.next(inf);
    this.flightListProob.unshift(inf);
    console.log("Esto llega al servicio", inf);
    console.log("Esta es la lista", this.flightListProob);
  }

}
