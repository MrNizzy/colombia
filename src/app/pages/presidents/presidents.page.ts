import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonSearchbar,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { PresidentService } from '@app/services/president.service';
import { President } from '@app/models/president.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FilterPresidentPipe } from '@app/pipes/filter-president.pipe';

@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.page.html',
  styleUrls: ['./presidents.page.scss'],
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
    IonNote,
    IonItem,
    IonLabel,
    RouterLink,
    FilterPresidentPipe,
    IonSearchbar,
    DatePipe,
    IonThumbnail,
  ],
})
export class PresidentsPage implements OnInit {
  presidentService = inject(PresidentService);
  snackBar = inject(MatSnackBar);
  presidents = signal<President[]>([]);
  searchText = signal('');

  ngOnInit() {
    this.presidentService.getPresidents().subscribe({
      next: (presidents) => {
        this.presidents.set(presidents);
      },
      error: () => {
        this.snackBar.open('Error loading presidents', 'Close', {
          duration: 5000,
        });
      },
    });
  }
}
