import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer';
import { FilterObject } from '../model/filter-object';

const API_URL: string = "https://api.punkapi.com/v2/beers?per_page=12&page=";
const API_BEER_DETAILS_URL: string = "https://api.punkapi.com/v2/beers/"
const API_FILTER_URL: string = "https://api.punkapi.com/v2/beers?";

@Injectable({ providedIn: 'root' })
export class BeerService {

    constructor(private http: HttpClient) { }

    getBeers(page: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_URL + page);
    }

    getBeerDetails(beerId: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(API_BEER_DETAILS_URL + beerId);
    }

    filterBeers(filterObject: FilterObject): Observable<Beer[]> {
        let filterUrl = this.constructFilterUrl(filterObject)
        return this.http.get<Beer[]>(API_FILTER_URL + filterUrl);
    }

    private constructFilterUrl(filterObject: FilterObject): string {
        let filterUrl: string = ""
        for(const property in filterObject) {
            if (filterObject[property as keyof FilterObject]) {
                filterUrl = filterUrl.concat(`${property}=${filterObject[property as keyof FilterObject]}&`)
            }
        }
        return filterUrl
    }

}
