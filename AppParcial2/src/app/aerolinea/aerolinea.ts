import { Vuelo } from "../vuelo/vuelo";
export class Aerolinea {
    id: number;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;
    vuelos: Vuelo;

    constructor(id: number, airlineName: string, country: string, city: string, address: string, identityColor: string, slogan: string, vuelos: Vuelo) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor = identityColor;
        this.slogan = slogan;
        this.vuelos = vuelos;
    }
}
