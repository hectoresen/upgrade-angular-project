import { MenuItem } from './../../models/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      href: "/home",
      title: "Inicio",
      icon: "home"
    },
    {
      href: "/flights",
      title: "Vuelos",
      icon: "flight_takeoff"
    },
    {
      href: '/gestion',
      title: "Gestión",
      icon: "perm_identity"
    },
    {
      href: '/cart',
      title: 'Cesta',
      icon: 'shopping_cart'
    }
  ]
}
