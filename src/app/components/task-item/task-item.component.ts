import { Component, Input, OnInit } from '@angular/core';
import { Coches } from '../../interfaces/coches';
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel, IonButton],
})
export class TaskItemComponent  implements OnInit {

  @Input() coches!: Coches;

  constructor() { }

  mostrarDetalles() {
    console.log('Datos de los coches:', this.coches)
  }

  ngOnInit() {}

}