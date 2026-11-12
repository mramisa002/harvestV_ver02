export type Coordinates = { latitude: number; longitude: number };
export type FarmRecord = Coordinates & { id: string; name: string; label: string; details: Record<string,string>; updatedAt: string };
export type ForecastDay = { date:string; min:number|null; max:number|null; rain:number|null; rainProbability:number|null; gusts:number|null; et0:number|null };
export type WeatherData = { source:string; sourceUrl:string; fetchedAt:string; observedAt:string; timezone:string; coordinates:Coordinates; current:{ temperature:number|null; humidity:number|null; wind:number|null; precipitation:number|null; code:number|null }; days:ForecastDay[]; pastRain:{total:number|null;days:number}; indicators:('rain'|'wind'|'heat')[] };
export type ClimateData = { source:string; sourceUrl:string; fetchedAt:string; start:string; end:string; coordinates:Coordinates; days:number; rainfallDays:number; expectedDays:number; meanTemperature:number|null; rainfallTotal:number|null; humidity:number|null; solarRadiation:number|null; solarUnit:string };
export type LocationResult = Coordinates & { id:number; name:string; region:string; country:string };
