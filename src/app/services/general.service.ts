import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GeneralInfo } from '@app/models/general-info.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  http = inject(HttpClient);

  getGeneralInfo(): Observable<GeneralInfo> {
    return this.http.get<GeneralInfo>(environment.apiUrl + '/Country/Colombia');
  }
}
