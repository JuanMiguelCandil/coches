import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonButtons,
  IonIcon,
  IonImg,
  IonList,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

import { Coches } from '../interfaces/coches';
import { CarItemComponent } from '../components/car-item/car-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CarItemComponent,
    CommonModule,
    IonRow,
    IonCol,
    IonGrid,
    RouterLink,
    IonButtons,
    IonIcon,
    IonImg,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    FormsModule
  ],
})
export class HomePage {

  listaDeCoches: Coches[] = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
    { id: 2, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' },
    { id: 3, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
    { id: 4, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' },
    { id: 5, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
    { id: 6, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' }
  ];

  nuevoCoche: Coches = {
    id: 0,
    marca: '',
    modelo: '',
    caballos: 0,
    kilometros: 0,
    imagen: '../../assets/img/coche.jpg'
  };

  constructor() {
    addIcons({ settingsOutline });
  }

  agregarCoche() {

    if (
      this.nuevoCoche.marca.trim() === '' ||
      this.nuevoCoche.modelo.trim() === '' ||
      this.nuevoCoche.caballos <= 0 ||
      this.nuevoCoche.kilometros < 0 ||
      this.nuevoCoche.imagen.trim() === ''
    ) {
      return;
    }

    const cocheParaAñadir: Coches = {
      ...this.nuevoCoche,
      id: Math.max(0, ...this.listaDeCoches.map(coche => coche.id)) + 1
    };

    this.listaDeCoches.unshift(cocheParaAñadir);

    this.nuevoCoche = {
      id: 0,
      marca: '',
      modelo: '',
      caballos: 0,
      kilometros: 0,
      imagen: '../../assets/img/coche.jpg'
    };

  }
}