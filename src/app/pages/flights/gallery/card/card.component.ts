import { PipePricePipe } from './../../../../shared/pipes/pipe-price.pipe';
import { flightModel } from 'src/app/shared/models/flightModel';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item : flightModel = {
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

  showMore:boolean = false;
  ryanair: boolean = false;
  vueling: boolean = false;
  iberia: boolean = false;
  titleShow: string = "Más info";

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.companyLogo();
  };

  showOrNot(): void{
    this.showMore = !this.showMore;
    if(this.showMore){
      this.titleShow = "Menos info";
    }else if(!this.showMore){
      this.titleShow = "Más info";
    }
  };

  addToCart(): void{
    console.log(this.item);
    this.shoppingCart.setCartInformation(this.item);
    console.log(this.item.price);
    this.totalPrice()
    console.log(this.shoppingCart.priceList)
  };

  companyLogo(): void {
    if(this.item.company === 'Ryanair'){
      this.ryanair = !this.ryanair
    }else if(this.item.company === 'Vueling'){
      this.vueling = !this.vueling
    }else if(this.item.company === 'Iberia'){
      this.iberia = !this.iberia
    }
  };

  totalPrice():void {
    this.shoppingCart.priceList += this.item.price;
  };
}
