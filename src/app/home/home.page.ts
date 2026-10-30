import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonGrid, IonButtons, IonIcon } from '@ionic/angular';
import { Coches } from '../interfaces/coches';

import { CarItemComponent } from '../components/car-item/car-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    CarItemComponent,
    CommonModule, IonRow, IonCol, IonGrid,
    RouterLink, IonButtons, IonIcon],
})
export class HomePage {

  listaDeCoches: Coches[] = [
    {id: 1, marca: 'Toyota', modelo: 'Corolla', caballos: 132,kilometros: 52000, imagen: 'https://picsum.photos/400'},
    {id: 2, marca: 'Honda', modelo: 'Civic', caballos: 155,kilometros: 138000, imagen: 'https://picsum.photos/400'},
    {id: 3, marca: 'Toyota', modelo: 'Corolla', caballos: 132,kilometros: 52000, imagen: 'https://picsum.photos/400'},
    {id: 4, marca: 'Honda', modelo: 'Civic', caballos: 155,kilometros: 138000, imagen: 'https://picsum.photos/400'},
    {id: 5, marca: 'Toyota', modelo: 'Corolla', caballos: 132,kilometros: 52000, imagen: 'https://picsum.photos/400'},
    {id: 6, marca: 'Honda', modelo: 'Civic', caballos: 155,kilometros: 138000, imagen: 'https://picsum.photos/400'}
  ];

  constructor() {
    addIcons({settingsOutline});
  }
}