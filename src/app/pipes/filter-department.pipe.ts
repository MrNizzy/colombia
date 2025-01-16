import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '@app/models/department.model';

@Pipe({
  name: 'filterDepartment',
})
export class FilterDepartmentPipe implements PipeTransform {
  transform(departments: Department[], searchText: string): Department[] {
    if (!departments || !searchText) {
      return departments;
    }
    return departments.filter((department) =>
      department.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
