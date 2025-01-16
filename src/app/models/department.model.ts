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
  cityCapital: CityCapital;
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

export interface CityCapital {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department: null;
  touristAttractions: null;
  presidents: null;
  indigenousReservations: null;
  airports: null;
  radios: null;
}

export interface City {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department: null;
  touristAttractions: null;
  presidents: null;
  indigenousReservations: null;
  airports: null;
  radios: null;
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
  cityCapital: {
    id: 0,
    name: '',
    description: '',
    surface: 0,
    population: 0,
    postalCode: '',
    departmentId: 0,
    department: null,
    touristAttractions: null,
    presidents: null,
    indigenousReservations: null,
    airports: null,
    radios: null,
  },
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
