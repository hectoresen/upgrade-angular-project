import { flightModel } from './../../../../../shared/models/flightModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CallToApiService } from '../../../services/call-to-api.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  @Output() sendFinderResults = new EventEmitter<flightModel[]>();


  inputFinder: FormGroup;
  //Input value
  originValue:string = '';
  destinationValue: string = '';
  //Input results
  showInputResults: flightModel[] = [];

  flightsList: flightModel[] = [];

  //Toggle options
  toggleDirectFlight: boolean = false;
  toggleHandLugagge: boolean = false;

  constructor(private formbuild: FormBuilder, public callApiFlights: CallToApiService, public cartService : ShoppingCartService ) {
    this.inputFinder = this.formbuild.group(
      {
        origin: ['', Validators.required],
        destination: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.callApiFlights.getFlightsOfApi(1).subscribe();
    this.getFlights();

  }

  getFlights():void{
    this.callApiFlights.getFlightsList().subscribe((data:flightModel[]) =>{this.flightsList = data})
  }

  //Toggle options
  directFlightToggle() :void{
    this.toggleDirectFlight = !this.toggleDirectFlight;
  }
  handLugaggeToggle() :void{
    this.toggleHandLugagge = !this.toggleHandLugagge;
    console.log(this.toggleHandLugagge);
  }


  searchFlight() : void{
    this.originValue = this.inputFinder.value.origin;
    this.destinationValue = this.inputFinder.value.destination;
    console.log('Origen',this.originValue);
    console.log('Destino', this.destinationValue);
    this.flightsList.map((index:any) =>{
      if(index.origin.includes(this.originValue) &&  index.destination.includes(this.destinationValue) && this.toggleDirectFlight === index.directFlight && this.toggleHandLugagge === index.handLugagge){
        this.showInputResults.push(index)
        this.sendFinderResults.emit(this.showInputResults)
      }
      else{
        console.log('No he encontrado nada');
      }
    })
  }


}
