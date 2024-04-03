import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";
import { Mission } from "../models/mission";

@Injectable({
    providedIn: "root",
})
export class SpacexapiService {
    client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: "https://api.spacexdata.com/v3/launches",
        });
    }

    async getLaunches() {
        return this.client.get<Mission[]>("");
    }

    async filterLaunches(year: number) {
        return this.client.get<Mission[]>("", {
            params: {
                launch_year: year,
            },
        });
    }

    async getLaunchDetails(flightNumber: number) {
        return this.client.get<Mission>(`/${flightNumber}`);
    }
}
