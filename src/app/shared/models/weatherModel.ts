export interface WeatherData{
  name : string,
  temp_c: number,
  is_day: number,
  condition: ConditionData,
  precip_mm: string,
  precip_in: string,
  cloud: string
}

export interface ConditionData{
  text: string,
  icon: string
}
