import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonList,
  IonLabel,
  IonNote,
  IonListHeader,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { President, presidentDefault } from '@app/models/president.model';
import { PresidentService } from '@app/services/president.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-president',
  templateUrl: './president.page.html',
  styleUrls: ['./president.page.scss'],
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
    IonItem,
    IonList,
    IonLabel,
    IonNote,
    IonListHeader,
    DatePipe,
    IonThumbnail,
  ],
})
export class PresidentPage implements OnInit {
  presidentService = inject(PresidentService);
  snackBar = inject(MatSnackBar);
  president = signal<President>(presidentDefault);
  id = input<number>(0);

  ngOnInit() {
    this.presidentService.getPresident(this.id()).subscribe({
      next: (president) => {
        this.president.set(president);
      },
      error: () => {
        this.snackBar.open('Error al cargar el presidente', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }
}
