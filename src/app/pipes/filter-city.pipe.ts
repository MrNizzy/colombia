import { Pipe, PipeTransform } from '@angular/core';
import { City } from '@app/models/city.model';

@Pipe({
  name: 'filterCity',
  standalone: true,
})
export class FilterCityPipe implements PipeTransform {
  transform(cities: City[], searchText: string): City[] {
    if (!cities || !searchText) {
      return cities;
    }
    return cities.filter((city) =>
      city.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
