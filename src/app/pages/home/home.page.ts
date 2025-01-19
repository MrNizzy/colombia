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
  imports: [IonButton, IonIcon],
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
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='720' height='1080' preserveAspectRatio='none' viewBox='0 0 720 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3cpath d='M122.621%2c281.042C173.825%2c276.41%2c204.869%2c229.429%2c228.833%2c183.943C250.697%2c142.443%2c262.557%2c95.804%2c242.568%2c53.369C219.282%2c3.933%2c177.266%2c-41.268%2c122.621%2c-41.542C67.651%2c-41.817%2c28.394%2c4.745%2c0.574%2c52.157C-27.699%2c100.34%2c-49.345%2c157.435%2c-23.06%2c206.73C4.431%2c258.286%2c64.432%2c286.306%2c122.621%2c281.042' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M93.754%2c223.848C141.377%2c226.715%2c190.444%2c204.597%2c212.17%2c162.122C232.539%2c122.298%2c211.825%2c77.208%2c188.181%2c39.237C166.285%2c4.073%2c135.178%2c-28.182%2c93.754%2c-28.051C52.504%2c-27.921%2c20.006%2c3.561%2c0.354%2c39.829C-18.269%2c74.197%2c-19.988%2c114.353%2c-2.296%2c149.209C17.373%2c187.961%2c50.375%2c221.236%2c93.754%2c223.848' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M40.316%2c107.555C68.754%2c109.126%2c101.383%2c108.434%2c116.582%2c84.348C132.429%2c59.235%2c123.098%2c26.773%2c107.065%2c1.778C92.406%2c-21.075%2c67.447%2c-33.539%2c40.316%2c-34.55C11.024%2c-35.641%2c-21.203%2c-29.047%2c-35.642%2c-3.538C-49.94%2c21.722%2c-39.012%2c52.696%2c-22.629%2c76.657C-8.49%2c97.336%2c15.303%2c106.173%2c40.316%2c107.555' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M652.353%2c192.47C692.295%2c194.399%2c725.46%2c164.736%2c745.203%2c129.96C764.667%2c95.676%2c771.358%2c53.138%2c750.418%2c19.735C730.468%2c-12.089%2c689.906%2c-18.89%2c652.353%2c-18.156C616.404%2c-17.453%2c578.313%2c-7.91%2c560.709%2c23.442C543.372%2c54.319%2c556.956%2c90.555%2c573.834%2c121.685C591.836%2c154.887%2c614.629%2c190.648%2c652.353%2c192.47' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M750.882%2c395.144C826.955%2c398.455%2c893.317%2c344.964%2c928.594%2c277.484C961.406%2c214.72%2c953.717%2c139.485%2c915.811%2c79.66C880.536%2c23.988%2c816.705%2c-6.309%2c750.882%2c-2.986C690.379%2c0.068%2c642.64%2c42.436%2c612.473%2c94.971C582.453%2c147.25%2c572.845%2c208.351%2c598.088%2c263.097C628.299%2c328.616%2c678.801%2c392.006%2c750.882%2c395.144' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M742.822%2c376.642C816.485%2c382.456%2c883.31%2c333.245%2c919.228%2c268.67C954.162%2c205.866%2c951.535%2c129.297%2c914.74%2c67.565C878.824%2c7.308%2c812.96%2c-28.526%2c742.822%2c-27.291C674.758%2c-26.093%2c611.205%2c12.394%2c581.078%2c73.439C553.729%2c128.856%2c579.763%2c189.647%2c608.849%2c244.172C640.53%2c303.561%2c675.72%2c371.346%2c742.822%2c376.642' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M88.385%2c1131.48C132.564%2c1134.925%2c181.627%2c1129.292%2c206.079%2c1092.336C232.533%2c1052.356%2c229.771%2c997.985%2c203.05%2c958.183C178.789%2c922.046%2c131.856%2c914.855%2c88.385%2c917.029C49.357%2c918.981%2c11.19%2c934.697%2c-7.996%2c968.74C-26.876%2c1002.24%2c-20.896%2c1043.079%2c-1.301%2c1076.166C17.883%2c1108.558%2c50.853%2c1128.554%2c88.385%2c1131.48' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M118.448%2c1220.263C174.718%2c1221.444%2c218.404%2c1177.145%2c246.349%2c1128.291C274.059%2c1079.848%2c288.805%2c1020.524%2c260.065%2c972.685C231.958%2c925.901%2c172.912%2c911.87%2c118.448%2c915.398C70.321%2c918.516%2c29.367%2c947.329%2c5.404%2c989.182C-18.393%2c1030.745%2c-21.526%2c1080.089%2c-0.48%2c1123.111C23.629%2c1172.394%2c63.596%2c1219.112%2c118.448%2c1220.263' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M152.807%2c1236.296C211.341%2c1238.886%2c273.465%2c1226.002%2c305.751%2c1177.109C341.037%2c1123.673%2c343.017%2c1052.922%2c310.211%2c997.929C278.122%2c944.137%2c215.435%2c919.698%2c152.807%2c920.721C92.099%2c921.713%2c32.834%2c949.463%2c4.068%2c1002.932C-23.447%2c1054.076%2c-9.58%2c1115.565%2c21.635%2c1164.539C50.345%2c1209.584%2c99.442%2c1233.935%2c152.807%2c1236.296' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M602.275%2c1022.54C623.223%2c1022.028%2c640.556%2c1008.563%2c651.543%2c990.72C663.203%2c971.784%2c670.456%2c948.579%2c659.852%2c929.032C648.859%2c908.768%2c625.318%2c900.61%2c602.275%2c899.901C577.67%2c899.144%2c550.482%2c903.947%2c538.218%2c925.292C525.984%2c946.586%2c535.141%2c972.726%2c548.65%2c993.235C560.659%2c1011.467%2c580.45%2c1023.073%2c602.275%2c1022.54' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M761.515%2c1313.258C836.022%2c1313.792%2c913.93%2c1295.474%2c953.815%2c1232.539C996.208%2c1165.647%2c998.066%2c1076.098%2c953.151%2c1010.873C912.605%2c951.993%2c833.005%2c953.028%2c761.515%2c953.286C690.695%2c953.542%2c612.016%2c953.64%2c572.259%2c1012.248C528.622%2c1076.576%2c532.557%2c1164.01%2c573.931%2c1229.816C612.973%2c1291.911%2c688.168%2c1312.732%2c761.515%2c1313.258' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M638.225%2c1082.601C671.439%2c1081.689%2c706.157%2c1075.733%2c724.587%2c1048.086C744.955%2c1017.533%2c748.595%2c976.896%2c729.667%2c945.43C711.218%2c914.761%2c673.913%2c901.816%2c638.225%2c904.52C606.848%2c906.897%2c584.951%2c931.17%2c567.999%2c957.68C549.032%2c987.341%2c525.986%2c1022.374%2c543.239%2c1053.064C560.654%2c1084.043%2c602.7%2c1083.576%2c638.225%2c1082.601' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='720' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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
