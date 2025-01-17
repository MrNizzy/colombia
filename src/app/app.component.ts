import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  homeOutline,
  homeSharp,
  locateOutline,
  locateSharp,
  mapOutline,
  mapSharp,
  businessOutline,
  businessSharp,
  peopleOutline,
  peopleSharp,
  locationOutline,
  locationSharp,
  radioOutline,
  radioSharp,
  calendarOutline,
  calendarSharp,
} from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonTitle,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/content/home', icon: 'home' },
    { title: 'Regiones', url: '/content/regions', icon: 'locate' },
    { title: 'Departamentos', url: '/content/departments', icon: 'map' },
    { title: 'Ciudades', url: '/content/cities', icon: 'business' },
    { title: 'Presidentes', url: '/content/presidents', icon: 'people' },
    // { title: 'Turismo', url: '/content/turistic', icon: 'location' },
    // { title: 'Mapas', url: '/content/maps', icon: 'map' },
    // {
    //   title: 'Especies invasoras',
    //   url: '/content/invasive-species',
    //   icon: 'warning',
    // },
    // { title: 'Tribus nativas', url: '/content/native-tribes', icon: 'people' },
    // { title: 'Reservas nativas', url: '/content/native-reserves', icon: 'map' },
    {
      title: 'Constitución política',
      url: '/content/political-constitution',
      icon: 'bookmark',
    },
    // {
    //   title: 'Radios',
    //   url: '/content/radios',
    //   icon: 'radio',
    // },
    {
      title: 'Calendario festivo',
      url: '/content/holidays',
      icon: 'calendar',
    },
    {
      title: 'Acerca de',
      url: '/content/about',
      icon: 'paper-plane',
    },
  ];
  public urls = [
    {
      title: 'GitHub',
      url: 'https://github.com/MrNizzy',
      icon: 'assets/icons/github.svg',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mrnizzy/',
      icon: 'assets/icons/linkedin.svg',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/mr.nizzy/',
      icon: 'assets/icons/instagram.svg',
    },
  ];

  constructor() {
    addIcons({
      homeOutline,
      homeSharp,
      locateOutline,
      locateSharp,
      mapOutline,
      mapSharp,
      heartOutline,
      heartSharp,
      businessOutline,
      businessSharp,
      peopleOutline,
      peopleSharp,
      locationOutline,
      locationSharp,
      bookmarkOutline,
      bookmarkSharp,
      warningOutline,
      warningSharp,
      radioOutline,
      radioSharp,
      calendarOutline,
      calendarSharp,
      paperPlaneOutline,
      paperPlaneSharp,
    });
  }
}
