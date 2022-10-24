import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../model/beer';

const MAX_BEER_IN_WISHLIST = 20;

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  favBeers: Beer[] = [];
  private wishlishtCounterSource = new BehaviorSubject<number>(this.getLovedBeers().length);
  data = this.wishlishtCounterSource.asObservable();
  
  constructor() {
    console.log(this.favBeers.length)
    console.log(this.getLovedBeers().length);
    this.favBeers = this.getLovedBeers()
  }

  addBeerIntoWishlist(beer: Beer) {
    if (this.favBeers.filter(currentBeer => currentBeer.name === beer.name).length == 0) {
      if(this.favBeers.length < MAX_BEER_IN_WISHLIST) {
        this.favBeers.push(beer);
        this.updateData(this.favBeers.length)
        localStorage.setItem("loved-beers", JSON.stringify(this.favBeers));
        
      }
    }
  }

  getLovedBeers() {
    let favBeers = localStorage.getItem("loved-beers");
    let favBeersParsed: Beer[] = [];
    if(favBeers) {
      console.log(favBeers)
      favBeersParsed = JSON.parse(localStorage.getItem("loved-beers") || "[]");
    }
    return favBeersParsed;
  }

  private updateData(data: number) {
    this.wishlishtCounterSource.next(data);
  }
}
