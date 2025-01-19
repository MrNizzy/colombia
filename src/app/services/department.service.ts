import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { departmentsData } from '@app/data/departments.data';
import {
  City,
  Department,
  departmentDefault,
} from '@app/models/department.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  http = inject(HttpClient);
  departments = signal<Department[]>(departmentsData);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.apiUrl + '/Department');
  }

  getDepartmentById(id: number): Department {
    return (
      this.departments().find((department) => department.id === id) ||
      departmentDefault
    );
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
