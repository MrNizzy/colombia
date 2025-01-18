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
} from '@ionic/angular/standalone';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralService } from '@services/general.service';
import { ActivatedRoute } from '@angular/router';

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
  ],
})
export class HomePage implements OnInit {
  generalInfoService = inject(GeneralService);
  snackBar = inject(MatSnackBar);
  generalInfo = signal<GeneralInfo>(defaultGeneralInfo);
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.generalInfoService.getGeneralInfo().subscribe({
      next: (response) => {
        this.generalInfo.set(response);
      },
      error: () => {
        this.snackBar.open('Error al cargar la información general', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }
}
