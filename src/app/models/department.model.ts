export interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: null;
  country: null;
  cities: null;
  regionId: number;
  region: Region;
  naturalAreas: null;
  maps: null;
  indigenousReservations: null;
  airports: null;
}

export interface Region {
  id: number;
  name: string;
  description: string;
  departments: null;
}

export const departmentDefault: Department = {
  id: 0,
  name: '',
  description: '',
  cityCapitalId: 0,
  municipalities: 0,
  surface: 0,
  population: 0,
  phonePrefix: '',
  countryId: 0,
  cityCapital: null,
  country: null,
  cities: null,
  regionId: 0,
  region: {
    id: 0,
    name: '',
    description: '',
    departments: null,
  },
  naturalAreas: null,
  maps: null,
  indigenousReservations: null,
  airports: null,
};
