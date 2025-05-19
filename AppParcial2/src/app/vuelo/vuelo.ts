export class Vuelo {
    id:number;
    departureAirport:string;
    departureCity:string;
    arrivalAirport:string;
    arrivalCountry:string;
    arrivalCity:string;
    departureTime:string;
    flightDuration:string;
    image:string;

    constructor(id:number, departureAirport:string, departureCity:string, arrivalAirport:string, arrivalCountry:string, arrivalCity:string, departureTime:string, flightDuration:string, image:string)
    {
        this.id = id;
        this.departureAirport = departureAirport;
        this.departureCity = departureCity;
        this.arrivalAirport = arrivalAirport;
        this.arrivalCountry = arrivalCountry;
        this.arrivalCity = arrivalCity;
        this.departureTime = departureTime;
        this.flightDuration = flightDuration;
        this.image = image;
    }

}
