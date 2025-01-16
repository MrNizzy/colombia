export interface City {
  id: number;
  name: string;
  description: string;
  surface: null;
  population: null;
  postalCode: null;
  departmentId: number;
  department: null;
  touristAttractions: null;
  presidents: null;
  indigenousReservations: null;
  airports: null;
  radios: null;
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
  department: null,
  touristAttractions: null,
  presidents: null,
  indigenousReservations: null,
  airports: null,
  radios: null,
};
