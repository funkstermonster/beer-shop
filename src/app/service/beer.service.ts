import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';

const API_URL: string = "https://api.punkapi.com/v2/beers/"

@Injectable({ providedIn: 'root' })
export class BeerService {

    constructor(private http: HttpClient) { }

    getBeers(): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_URL)
    }

    getBeerDetails(beerId: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_URL + beerId)
    }
}
