import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Holiday } from '@app/models/holiday.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  http = inject(HttpClient);

  getHolidays(year: number): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      environment.apiUrl + '/Holiday/year/' + year
    );
  }
}
