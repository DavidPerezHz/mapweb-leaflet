export interface Place {
  id: number,
  nombre?: string;
  description: string;
  position: {
    lat: number;
    lng: number;
  };
  zona?: string,
  venta?: number

}

export interface PropsPlaces {
  places: Place[];
}


export interface PropVentas {
  zona: string;
  total: number;
}

export interface PropWeather {
  city: string;
  temp: number;
  description?: string;
  humidity?: number;
}