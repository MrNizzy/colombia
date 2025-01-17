export interface President {
  id: number;
  image: string;
  name: string;
  lastName: string;
  startPeriodDate: Date;
  endPeriodDate: Date;
  politicalParty: string;
  description: string;
  cityId: number;
  city: City;
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
  presidents: null[];
  indigenousReservations: null;
  airports: null;
  radios: null;
}

export const presidentDefault: President = {
  id: 0,
  image: '',
  name: '',
  lastName: '',
  startPeriodDate: new Date(),
  endPeriodDate: new Date(),
  politicalParty: '',
  description: '',
  cityId: 0,
  city: {
    id: 0,
    name: '',
    description: '',
    surface: 0,
    population: 0,
    postalCode: '',
    departmentId: 0,
    department: null,
    touristAttractions: null,
    presidents: [],
    indigenousReservations: null,
    airports: null,
    radios: null,
  },
};
