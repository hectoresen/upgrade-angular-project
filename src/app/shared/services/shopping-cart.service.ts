import { flightModel } from './../models/flightModel';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCartService {
  private information: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  cartList:flightModel[] = [];

  priceList: number = 0;

  getCartInformationObservable(): Observable<any>{
    return this.information.asObservable();
  }

  setCartInformation(infCart: flightModel): void{
    this.cartList.unshift(infCart);
    this.information.next(infCart);
  }

  setCartInformationFinder(infCart: flightModel[]): void{
    infCart.forEach(element  => {
      this.cartList.push(element);
    })
    this.information.next(infCart);
  }

}
