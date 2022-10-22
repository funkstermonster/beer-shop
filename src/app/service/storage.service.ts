import { Injectable } from '@angular/core';
import { Beer } from '../model/beer';

const MAX_ITEMS_IN_STORAGE = 15

@Injectable({ providedIn: 'root' })
export class StorageService {

    private viewedBeers: Beer[] = []

    constructor() {
        this.viewedBeers = this.getViewedBeers()
    }

    addBeer(beer: Beer) {
        this.viewedBeers.push(beer)
        localStorage.setItem("viewed-beers", JSON.stringify(this.viewedBeers))
        if (this.viewedBeers.length > MAX_ITEMS_IN_STORAGE) {
            this.viewedBeers.shift()
        }
    }

    getViewedBeers() {
        let viewedBeers = localStorage.getItem("viewed-beers")
        let viewedBeersParsed: Beer[] = []
        if (viewedBeers) {
            viewedBeersParsed = JSON.parse(localStorage.getItem("viewed-beers") || "[]");
        }
        return viewedBeersParsed
    }
}
