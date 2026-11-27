import { Component, ChangeDetectorRef } from '@angular/core';
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
  IonList, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonSkeletonText, 
  IonCheckbox, 
  IonLabel
 } from '@ionic/angular';
import { Coches } from '../interfaces/coches';
import { CarItemComponent } from '../components/car-item/car-item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { DetalleModalComponent } from '../components/detalle-modal/detalle-modal.component';

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
    IonList,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
    IonCheckbox,
    IonLabel,
    IonSkeletonText
],
})
export class HomePage {

  public listaDeCoches: Coches[] = [];
  public cargando: boolean = true;

  nuevoCoche: Coches = {
    id: 0,
    marca: '',
    modelo: '',
    caballos: 0,
    kilometros: 0,
    imagen: '../../assets/img/coche.jpg'
  };

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ settingsOutline });
    setTimeout(() => {
      this.listaDeCoches = [
        { id: 1, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
        { id: 2, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' },
        { id: 3, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
        { id: 4, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' },
        { id: 5, marca: 'Toyota', modelo: 'Corolla', caballos: 132, kilometros: 52000, imagen: '../../assets/img/coche.jpg' },
        { id: 6, marca: 'Honda', modelo: 'Civic', caballos: 155, kilometros: 138000, imagen: '../../assets/img/coche.jpg' }
      ];
      this.cargando = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: '¡Hola! Esto es una notificación Toast.',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      buttons: ['OK']
    });
    await toast.present();
  }

  async mostrarAlertaSimple() {
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Mensaje importante',
      message: 'Esto es una alerta que requiere atención.',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  async mostrarAlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Cierra la alerta sin más
          handler: () => { console.log('Cancelado'); }
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => {
            console.log('Confirmado: Elemento eliminado');
            // Aquí llamaríamos a la lógica de borrado
          }
        }
      ]
    });
    await alert.present();
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: DetalleModalComponent,
      componentProps: {
        mensaje: 'Este mensaje viene de la Home'
      }
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();

    if (role === 'confirm') {
      console.log('Modal cerrado. Datos recibidos: ', data);
    }
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