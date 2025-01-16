export interface GeneralInfo {
  id: number;
  name: string;
  description: string;
  stateCapital: string;
  surface: number;
  population: number;
  languages: string[];
  timeZone: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  isoCode: string;
  internetDomain: string;
  phonePrefix: string;
  radioPrefix: string;
  aircraftPrefix: string;
  subRegion: string;
  region: string;
  borders: string[];
  flags: string[];
}

export const defaultGeneralInfo: GeneralInfo = {
  id: 0,
  name: '',
  description: '',
  stateCapital: '',
  surface: 0,
  population: 0,
  languages: [],
  timeZone: '',
  currency: '',
  currencyCode: '',
  currencySymbol: '',
  isoCode: '',
  internetDomain: '',
  phonePrefix: '',
  radioPrefix: '',
  aircraftPrefix: '',
  subRegion: '',
  region: '',
  borders: [],
  flags: [],
};
