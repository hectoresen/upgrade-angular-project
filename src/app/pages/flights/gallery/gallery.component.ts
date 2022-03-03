import { ShoppingCartService } from './../../../shared/services/shopping-cart.service';
import { MatAccordion } from '@angular/material/expansion';
import { FormService } from './../../../shared/services/form.service';
import { flightModel } from './../../../shared/models/flightModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CallToApiService } from '../services/call-to-api.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  flightsList: flightModel[] = [];
  isLoading: boolean = false;

  //Input results
  showInputResults: flightModel[] = [];
  resultsContent: boolean = false;

  //Variables results
  showMore:boolean = false;
  ryanair: boolean = false;
  vueling: boolean = false;
  iberia: boolean = false;

  constructor(
    private callApiFlights: CallToApiService,
    public formService: FormService,
    public cartService : ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.callApiFlights.getFlightsOfApi(1).subscribe();
    this.getFlights();
  }

  getFlights(): void{
    this.isLoading = true;
    this.callApiFlights.getFlightsList().subscribe((data:flightModel[]) =>{
      this.flightsList = data;
      this.isLoading = false;
    })
  }

  manageSearchResults(results: flightModel[]) :void{
    this.showInputResults = results;


    if(this.showInputResults.length >= 1){
      this.resultsContent = true;
    }
    this.showInputResults.forEach((item:any) => {
      if(item.company === 'Ryanair'){
        this.ryanair = !this.ryanair
      }else if(item.company === 'Vueling'){
        this.vueling = !this.vueling
      }else if(item.company === 'Iberia'){
        this.iberia = !this.iberia
      }
    });
  }

  showOrNot(): void{
    this.showMore = !this.showMore;
  };


  addToCart(item: flightModel): void{
    console.log(item);
    this.cartService.setCartInformation(item);
  };

  nextPage(event:any):void{
    console.log('página', event.pageIndex);
    if(event.pageIndex <1){
      event.pageIndex = 1;
      console.log('No se permite una página inferior a 1, número de página actual:', event.pageIndex);
    }else if(event.pageIndex >3){
      event.pageIndex = 3;
      console.log('No hay más páginas disponibles, número página actual:', event.pageIndex);
    }
    this.callApiFlights.page = event.pageIndex;
    this.callApiFlights.getFlightsOfApi(event.pageIndex).subscribe();
  }
}
