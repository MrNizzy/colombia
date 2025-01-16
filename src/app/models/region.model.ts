export interface Region {
  id: number;
  name: string;
  description: string;
  departments: null;
}

export const regionDefault: Region = {
  id: 0,
  name: '',
  description: '',
  departments: null,
};
