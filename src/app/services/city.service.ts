import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { City, pagedListCity } from '@app/models/city.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  http = inject(HttpClient);

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(
      environment.apiUrl + '/City?sortBy=name&sortDirection=asc'
    );
  }

  getCity(id: number): Observable<City> {
    return this.http.get<City>(`${environment.apiUrl}/City/${id}`);
  }

  getCitiesPaged(page: number, pageSize: number): Observable<pagedListCity> {
    return this.http.get<pagedListCity>(
      `${environment.apiUrl}/City/pagedList?page=${page}&pageSize=${pageSize}&sortBy=name&sortDirection=asc`
    );
  }
}
