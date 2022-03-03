export interface flightModel {
  id: string,
  origin: string,
  destination: string,
  company: string,
  price: number,
  departureTime : number,
  arrivalTime: number,
  flightData: number | Date,
  directFlight: boolean,
  scales: {
    firstScale: string,
    secondScale: string,
  },
  companyLogo: string,
  cityImg: string,
  handLugagge: string,
}
