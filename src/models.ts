export interface StopModel {
  id: number;
  location: string;
  name: string;
  length: number;
  isOptional: boolean;
  isFavorite: boolean;
}

export interface EditedStopModel {
  location: string;
  name: string;
  length: number;
}
