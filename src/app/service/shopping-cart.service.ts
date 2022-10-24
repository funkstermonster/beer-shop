import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { 
    this.addedBeers = this.getBeers();
  }

  addedBeers: Beer[] = [];
  private addedBeerCounterSource = new BehaviorSubject<number>(this.getBeers().length);
  data = this.addedBeerCounterSource.asObservable();

  addBeerIntoCart(beer: Beer) {
    this.addedBeers.push(beer);
    this.updateData(this.addedBeers.length);
    localStorage.setItem("beers-in-cart", JSON.stringify(this.addedBeers));
  }

  removeBeerFromCart(beer: Beer) {
    this.addedBeers.splice(this.addedBeers.indexOf(beer), 1)
    this.updateData(this.addedBeers.length);
    localStorage.setItem("beers-in-cart", JSON.stringify(this.addedBeers));
  }

  getBeers(): Beer[] {
    let addedBeers = localStorage.getItem("beers-in-cart");
    let addedBeersParsed: Beer[] = [];
    if(addedBeers) {
      addedBeersParsed = JSON.parse(localStorage.getItem("beers-in-cart") || "[]");
    }
    return addedBeersParsed;
  }

  calculateItemsPrice() {
    let sum = 0;
    this.addedBeers.forEach(item => {
      sum += item.price
    })
    return sum
  }

  private updateData(data: number) {
    this.addedBeerCounterSource.next(data);
  }
}
