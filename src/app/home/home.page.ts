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
} from '@ionic/angular/standalone';
import { GeneralService } from '@services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  generalInfoService = inject(GeneralService);
  generalInfo = signal<GeneralInfo>(defaultGeneralInfo);

  ngOnInit(): void {
    this.generalInfoService.getGeneralInfo().subscribe({
      next: (response) => {
        this.generalInfo.set(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
