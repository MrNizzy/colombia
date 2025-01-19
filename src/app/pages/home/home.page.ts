import { Component, inject, OnInit, signal } from '@angular/core';
import {
  defaultGeneralInfo,
  GeneralInfo,
} from '@app/models/general-info.model';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonText,
  ModalController,
} from '@ionic/angular/standalone';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralService } from '@services/general.service';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
    RouterLink,
    IonSearchbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonText,
  ],
})
export class HomePage implements OnInit {
  generalInfoService = inject(GeneralService);
  snackBar = inject(MatSnackBar);
  modalController = inject(ModalController);
  generalInfo = signal<GeneralInfo>(defaultGeneralInfo);
  public folder!: string;
  menuItems = signal([
    {
      title: 'Regiones del país',
      description:
        'Información sobre las regiones del país, sus departamentos, mapas y más',
      url: '/content/regions',
      banner: 'assets/icons/national-park.svg',
    },
    {
      title: 'Atractivos turísticos',
      description:
        'Descubre los lugares turísticos más visitados de cada región',
      url: '/content/tourist-attractions',
      banner: 'assets/icons/bus.svg',
    },
    {
      title: 'Clima y geografía',
      description: 'Conoce el clima y geografía de cada región',
      url: '/content/climate-geography',
      banner: 'assets/icons/sun-behind-small-cloud.svg',
    },
    {
      title: 'Eventos y festivales',
      description: 'Conoce los eventos y festivales de cada región',
      url: '/content/events-festivals',
      banner: 'assets/icons/performing-arts.svg',
    },
    {
      title: 'Gastronomía',
      description: 'Descubre la gastronomía de cada región',
      url: '/content/gastronomy',
      banner: 'assets/icons/shallow-pan-of-food.svg',
    },
    {
      title: 'Historia y cultura',
      description: 'Conoce la historia y cultura de cada región',
      url: '/content/history-culture',
      banner: 'assets/icons/world-map.svg',
    },
    {
      title: 'Hoteles y restaurantes',
      description: 'Encuentra hoteles y restaurantes en cada región',
      url: '/content/hotels-restaurants',
      banner: 'assets/icons/hotel.svg',
    },
    {
      title: 'Transporte',
      description: 'Información sobre el transporte en cada región',
      url: '/content/transport',
      banner: 'assets/icons/taxi.svg',
    },
    {
      title: 'Vida nocturna',
      description: 'Descubre la vida nocturna de cada región',
      url: '/content/nightlife',
      banner: 'assets/icons/night-with-stars.svg',
    },
    {
      title: 'Vida silvestre',
      description: 'Conoce la vida silvestre de cada región',
      url: '/content/wildlife',
      banner: 'assets/icons/tiger-face.svg',
    },
  ]);

  constructor() {
    addIcons({
      arrowForward,
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('welcome') === null) {
      this.openWelcomeModal();
    }
  }

  async openWelcomeModal() {
    const modal = await this.modalController.create({
      component: WelcomeComponent,
    });
    modal.present();
  }
}

@Component({
  selector: 'app-welcome',
  imports: [IonButton, IonIcon, RouterLink],
  template: `
    <div class="content">
      <img
        src="assets/co.svg"
        alt="Bandera de Colombia"
        width="200"
        style="display: block; margin: 0 auto"
      />
      <h1 style="font-size: 2.5em; margin-bottom: 20px">
        ¡Bienvenido a nuestra aplicación!
      </h1>
      <p style="font-size: 1.2em; margin-bottom: 40px">
        Encuentra toda la información de Colombia en un solo lugar, desde la
        constitución política hasta la historia de nuestro país, todo en un solo
        lugar.
      </p>
      <ion-button
        expand="block"
        color="primary"
        size="large"
        shape="round"
        (click)="closeModal()"
      >
        Continuar
        <ion-icon slot="start" name="arrow-forward"></ion-icon>
      </ion-button>
    </div>
  `,
  styles: [
    `
      .content {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='720' height='1080' preserveAspectRatio='none' viewBox='0 0 720 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3cpath d='M668.1477776329 1127.7334454194904L774.6664371875685 981.1230882156206 628.0560799836987 874.6044286609522 521.5374204290301 1021.2147858648219z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M24.13709367979845 672.7758049184874L170.5178886836764 709.2726361914014 207.01471995659028 562.8918411875234 60.63392495271235 526.3950099146095z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M577.257%2c517.506C613.647%2c518.718%2c651.925%2c507.008%2c670.087%2c475.451C688.217%2c443.952%2c679.251%2c404.895%2c659.706%2c374.254C641.72%2c346.057%2c610.701%2c329.656%2c577.257%2c329.916C544.279%2c330.172%2c513.797%2c347.139%2c496.996%2c375.517C479.866%2c404.451%2c478.01%2c440.331%2c494.556%2c469.603C511.358%2c499.328%2c543.131%2c516.369%2c577.257%2c517.506' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M300.6648543883946 94.57362947136609L477.8679854325526 60.304056882248204 376.45311489759354-60.55747942026588z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M279.7646412417485 727.0312634290293L213.35002856364434 851.9389831784658 433.9189145268512 889.1070423209038z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M184.056710445753 68.40871164966644L155.14807335258095-67.5957328428565-34.40427483961744 43.769445043163046z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='720' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
        background-size: cover;
        background-position: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
      }
    `,
  ],
})
export class WelcomeComponent {
  modalController = inject(ModalController);
  closeModal() {
    localStorage.setItem('welcome', 'true');
    this.modalController.dismiss();
  }
}
