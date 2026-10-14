import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { Coches } from '../interfaces/coches';

import { TaskItemComponent } from '../components/task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    TaskItemComponent,
    CommonModule
  ],
})
export class HomePage {

  listaDeCoches: Coches[] = [
    {id: 1, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2022/corolla/1F7.png'},
    {id: 2, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: 'https://www.honda.com/content/dam/brand/honda/cars/civic/2022/overview/2022-civic-sedan-exterior-front-angle.png'}
  ];

  constructor() {}
}