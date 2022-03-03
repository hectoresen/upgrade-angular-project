import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CallToApiService } from './../../../pages/flights/services/call-to-api.service';
import { flightModel } from './../../models/flightModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';




@Component({
  selector: 'app-flights-cart',
  templateUrl: './flights-cart.component.html',
  styleUrls: ['./flights-cart.component.scss']
})
export class FlightsCartComponent implements OnInit {

  flightFound: any;
  position: number;

  flightsCart:boolean = false;
  flightsList: flightModel[];

  newPrice: number = 0;
  showDiscount: boolean = false;

  panelOpenState = false;
  cardForm: FormGroup;

  constructor
  (
    public shoppingCart: ShoppingCartService,
    public callApiFlights: CallToApiService,
    public cardNumberGroup: FormBuilder
  )
  {
    this.cardForm = this.cardNumberGroup.group(
      {
        number: [, [Validators.required, Validators.minLength(16)]]
      }
    )
  }


  ngOnInit(): void {
    this.getCartFlights();
    this.callApiFlights.getFlightsOfApi(1).subscribe();
    this.getAllFlights();
  }

  //Obtener artículos del carrito
  getCartFlights(): void{
    if(this.shoppingCart.cartList.length > 0){
      this.flightsCart = !this.flightsCart;
    }
  }
  //Eliminar artículos del carrito
  removeItem(id:string): void{
    this.flightFound = this.shoppingCart.cartList.find((flight) => flight.id == id);
    this.position = this.shoppingCart.cartList.indexOf(this.flightFound);
    this.shoppingCart.cartList.splice(this.position, 1);

    if(this.shoppingCart.cartList.length == 0){
      this.flightsCart = !this.flightsCart;
    };

    this.shoppingCart.priceList -= this.flightFound.price
  }

  getAllFlights(): void{
    this.callApiFlights.getFlightsList().subscribe((data:flightModel[]) =>{
      this.flightsList = data;
    })
  }

  addToCart(item:flightModel):void{
    this.shoppingCart.setCartInformation(item);
    this.flightsCart = true;
    this.shoppingCart.priceList += item.price
  }

  newPriceFunction():void{
    this.newPrice = parseInt((this.shoppingCart.priceList * 0.7).toFixed(2));
    this.showDiscount = true;
  }

  paypmentProcess():void{
    //Esto enviaría datos de pago
  }

}
