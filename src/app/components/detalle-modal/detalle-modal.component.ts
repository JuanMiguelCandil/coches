import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-detalle-modal',
  templateUrl: './detalle-modal.component.html',
  styleUrls: ['./detalle-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent
  ]
})
export class DetalleModalComponent  implements OnInit {
  @Input() mensaje: string = '';

  constructor(private modalController: ModalController) { }

  cerrar() {
    this.modalController.dismiss({ leido: true }, 'confirm');
  }

  ngOnInit() {}

}