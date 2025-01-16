import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { City, cityDefault } from '@app/models/city.model';
import { CityService } from '@app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
  ],
})
export class CityPage implements OnInit {
  cityService = inject(CityService);
  city = signal<City>(cityDefault);
  id = input<number>(0);

  ngOnInit() {
    this.cityService.getCity(this.id()).subscribe({
      next: (city) => {
        this.city.set(city);
      },
    });
  }
}
