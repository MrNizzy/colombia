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
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonListHeader,
  IonThumbnail,
} from '@ionic/angular/standalone';
import {
  City,
  Department,
  departmentDefault,
} from '@app/models/department.model';
import { DepartmentService } from '@app/services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
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
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonListHeader,
    RouterLink,
    IonThumbnail,
  ],
})
export class DepartmentPage implements OnInit {
  departmentService = inject(DepartmentService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  department = signal<Department>(departmentDefault);
  cities = signal<City[]>([]);
  id = input<string>('');

  ngOnInit() {
    this.department.set(this.departmentService.getDepartmentById(+this.id()));
    this.departmentService.getCitiesByDepartment(+this.id()).subscribe({
      next: (cities) => {
        cities.sort((a, b) => a.name.localeCompare(b.name));
        this.cities.set(cities);
      },
      error: () => {
        this.snackBar.open('Error al cargar las ciudades', 'Cerrar', {
          duration: 5000,
        });
        this.router.navigate(['/content/departments']);
      },
    });
  }
}
