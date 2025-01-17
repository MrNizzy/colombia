import { Pipe, PipeTransform } from '@angular/core';
import { President } from '@app/models/president.model';

@Pipe({
  name: 'filterPresident',
  standalone: true,
})
export class FilterPresidentPipe implements PipeTransform {
  transform(presidents: President[], searchText: string): President[] {
    if (!presidents || !searchText) {
      return presidents;
    }
    return presidents.filter((president) =>
      president.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
