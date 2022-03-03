import { Component, OnInit } from '@angular/core';

//Fontawesome
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {
  //Fontawesome
  faMapSigns = faMapSigns;
  faPlaneDeparture = faPlaneDeparture;
  faChartPie = faChartPie;
  faHeart = faHeart;
  faPlane = faPlane;
  faRocket = faRocket;

  panelOpenState = false;

  //User settings bar
  darkTheme: boolean = false;
  iconActive: boolean =  false;


  constructor(){}

  ngOnInit(): void {
  }
  darkMode():void{
    this.darkTheme = !this.darkTheme;
    this.iconActive = !this.iconActive;
    console.log(this.darkTheme);

  }

}
