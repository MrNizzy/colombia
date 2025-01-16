import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Region } from '@app/models/region.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  http = inject(HttpClient);

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(environment.apiUrl + '/Region');
  }
}
