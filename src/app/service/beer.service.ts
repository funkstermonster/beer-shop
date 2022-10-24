import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';

const API_URL: string = "https://api.punkapi.com/v2/beers?per_page=12&page="

@Injectable({ providedIn: 'root' })
export class BeerService {

    constructor(private http: HttpClient) { }

    getBeers(page: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_URL + page)
    }

    getBeerDetails(beerId: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_URL + beerId)
    }
}
