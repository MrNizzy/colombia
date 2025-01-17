import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { President } from '@app/models/president.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PresidentService {
  http = inject(HttpClient);

  getPresidents(): Observable<President[]> {
    return this.http.get<President[]>(
      environment.apiUrl + '/President?sortBy=endPeriodDate&sortDirection=desc'
    );
  }

  getPresident(id: number): Observable<President> {
    return this.http.get<President>(environment.apiUrl + `/President/${id}`);
  }
}
