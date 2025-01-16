import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  ModalController,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { RegionService } from '@app/services/region.service';
import { Region, regionDefault } from '@app/models/region.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Department } from '@app/models/department.model';
import { DepartmentService } from '@app/services/department.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    MatCardModule,
    IonButton,
    IonIcon,
  ],
})
export class RegionsPage implements OnInit {
  regionService = inject(RegionService);
  snackBar = inject(MatSnackBar);
  modalController = inject(ModalController);
  regions = signal<Region[]>([]);
  regionSelected = signal<Region>(regionDefault);

  ngOnInit() {
    this.regionService.getRegions().subscribe({
      next: (regions) => {
        this.regions.set(regions);
      },
      error: () => {
        this.snackBar.open('Error al cargar las regiones', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }

  async openRegionModal(region: Region) {
    this.regionSelected.set(region);
    const modal = await this.modalController.create({
      component: RegionModal,
      componentProps: {
        regionSelected: this.regionSelected,
      },
    });
    modal.present();
  }
}

@Component({
  selector: 'app-region-modal',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ regionSelected().name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeModal()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          @switch (regionSelected().name) { @case ('Andina') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_Andina).svg"
            alt="Andina"
          />
          } @case ('Caribe') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_del_Caribe).svg"
            alt="Caribe"
          />
          } @case ('Orinoquía') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_de_la_Orinoquía).svg"
            alt="Orinoquía"
          />
          } @case ('Pacífico') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_del_Pacífico).svg"
            alt="Pacífico"
          />
          } @case ('Amazonía') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_Amazónica).svg"
            alt="Amazonía"
          />
          } @case ('Insular') {
          <img
            src="assets/maps/Mapa_de_Colombia_(región_Insular).svg"
            alt="Insular"
          />
          } }
          <p>{{ regionSelected().description }}</p>

          <ion-list lines="inset">
            <ion-item>
              <ion-label>
                <strong>Departamentos ({{ departments().length }})</strong>
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list lines="inset">
            @for (department of departments(); track department.id) {
            <ion-item>
              <ion-label>
                {{ department.name }}
              </ion-label>
            </ion-item>
            }
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class RegionModal implements OnInit {
  modalController = inject(ModalController);
  snackBar = inject(MatSnackBar);
  departmentService = inject(DepartmentService);
  regionSelected = input<Region>(regionDefault);
  departments = signal<Department[]>([]);

  ngOnInit() {
    this.departmentService
      .getDepartmentsByRegion(this.regionSelected().id)
      .subscribe({
        next: (departments) => {
          this.departments.set(departments);
        },
        error: () => {
          this.snackBar.open('Error al cargar los departamentos', 'Cerrar', {
            duration: 5000,
          });
          this.modalController.dismiss();
        },
      });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
