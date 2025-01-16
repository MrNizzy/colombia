import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonLabel,
  IonItem,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { DepartmentService } from '@app/services/department.service';
import { Department } from '@app/models/department.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FilterDepartmentPipe } from '@app/pipes/filter-department.pipe';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
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
    IonList,
    IonItem,
    IonLabel,
    RouterLink,
    IonSearchbar,
    FilterDepartmentPipe,
  ],
})
export class DepartmentsPage implements OnInit {
  departmentService = inject(DepartmentService);
  snackBar = inject(MatSnackBar);
  departments = signal<Department[]>([]);
  searchText = signal<string>('');

  ngOnInit() {
    this.departmentService.getDepartments().subscribe({
      next: (departments) => {
        departments.sort((a, b) => a.name.localeCompare(b.name));
        this.departments.set(departments);
      },
      error: () => {
        this.snackBar.open('Error al cargar los departamentos', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }
}
