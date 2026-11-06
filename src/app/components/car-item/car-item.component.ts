import { Component, Input, OnInit } from '@angular/core';
import { Coches } from '../../interfaces/coches';
import { IonCard, 
  IonItem, 
  IonLabel, 
  IonCardHeader, 
  IonCardTitle, 
  IonImg } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  standalone: true,
  imports: [CommonModule, 
    IonCard, 
    IonItem, 
    IonLabel, 
    IonCardHeader, 
    IonCardTitle, 
    IonImg]
})
export class CarItemComponent  implements OnInit {

  @Input() coche!: Coches;

  constructor() { }

  mostrarDetalles()  {
    console.log('Detalles del coche:', this.coche);
  }

  ngOnInit() {}

}