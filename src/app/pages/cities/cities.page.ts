import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { CityService } from '@app/services/city.service';
import { City } from '@app/models/city.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FilterCityPipe } from '@app/pipes/filter-city.pipe';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    RouterLink,
    IonSearchbar,
    FilterCityPipe,
  ],
})
export class CitiesPage implements OnInit {
  cityService = inject(CityService);
  snackBar = inject(MatSnackBar);
  cities = signal<City[]>([]);
  searchText = signal('');

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe({
      next: (cities) => {
        this.cities.set(cities);
      },
      error: () => {
        this.snackBar.open('Error al cargar las ciudades', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }
}
