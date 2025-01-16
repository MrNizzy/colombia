export interface City {
  id: number;
  name: string;
  description: string;
  surface: null;
  population: null;
  postalCode: null;
  departmentId: number;
  department: Department;
  touristAttractions: null;
  presidents: null;
  indigenousReservations: null;
  airports: null;
  radios: null;
}

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
  cities: null[];
  regionId: number;
  region: null;
  naturalAreas: null;
  maps: null;
  indigenousReservations: null;
  airports: null;
}

export interface pagedListCity {
  page: number;
  pageSize: number;
  totalRecords: number;
  pageCount: number;
  data: City[];
}

export const pageListCityDefault: pagedListCity = {
  page: 1,
  pageSize: 20,
  totalRecords: 0,
  pageCount: 0,
  data: [],
};

export const cityDefault: City = {
  id: 0,
  name: '',
  description: '',
  surface: null,
  population: null,
  postalCode: null,
  departmentId: 0,
  department: {
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
    cities: [],
    regionId: 0,
    region: null,
    naturalAreas: null,
    maps: null,
    indigenousReservations: null,
    airports: null,
  },
  touristAttractions: null,
  presidents: null,
  indigenousReservations: null,
  airports: null,
  radios: null,
};
