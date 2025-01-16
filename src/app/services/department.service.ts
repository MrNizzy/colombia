import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { City, Department } from '@app/models/department.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  http = inject(HttpClient);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.apiUrl + '/Department');
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(environment.apiUrl + `/Department/${id}`);
  }

  getDepartmentsByRegion(regionId: number): Observable<Department[]> {
    return this.http.get<Department[]>(
      environment.apiUrl + `/Region/${regionId}/departments`
    );
  }

  getCitiesByDepartment(departmentId: number): Observable<City[]> {
    return this.http.get<City[]>(
      environment.apiUrl + `/Department/${departmentId}/cities`
    );
  }
}
