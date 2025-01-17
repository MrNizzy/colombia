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
  IonDatetime,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonNote,
} from '@ionic/angular/standalone';
import { HolidaysService } from '@app/services/holidays.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Holiday } from '@app/models/holiday.model';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
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
    IonDatetime,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    DatePipe,
    IonNote,
  ],
})
export class HolidaysPage implements OnInit {
  holidayService = inject(HolidaysService);
  snackBar = inject(MatSnackBar);
  highlightedDates = signal([{}]);
  actualYear = signal(new Date().getFullYear());
  holidays = signal<Holiday[]>([]);

  ngOnInit() {
    this.holidayService.getHolidays(this.actualYear()).subscribe({
      next: (holidays) => {
        this.holidays.set(holidays);
        holidays.forEach((holiday) => {
          const holidayDto = {
            date: holiday.date.split('T')[0],
            textColor: '#008000',
            backgroundColor: '#90EE90',
            title: holiday.name,
          };
          this.highlightedDates.set([...this.highlightedDates(), holidayDto]);
        });
      },
      error: () => {
        this.snackBar.open('Error al cargar los días festivos', 'Cerrar', {
          duration: 5000,
        });
      },
    });
  }
}
