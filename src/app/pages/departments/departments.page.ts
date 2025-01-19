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
  IonNote,
  IonRefresher,
  IonRefresherContent,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { DepartmentService } from '@app/services/department.service';
import { Department } from '@app/models/department.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FilterDepartmentPipe } from '@app/pipes/filter-department.pipe';
import { addIcons } from 'ionicons';
import { homeSharp } from 'ionicons/icons';
import { departmentsData } from '@data/departments.data';

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
    IonNote,
    IonRefresher,
    IonRefresherContent,
    IonThumbnail,
  ],
})
export class DepartmentsPage implements OnInit {
  departmentService = inject(DepartmentService);
  snackBar = inject(MatSnackBar);
  departments = signal<Department[]>(departmentsData);
  searchText = signal<string>('');

  constructor() {
    addIcons({
      homeSharp,
    });
  }

  ngOnInit() {}
}
