import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  addedBeers: Beer[] = [];
  tmpChangedQuantity: number = 0
  vat = 1.49
  shipping = 5.49

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers() {
    this.addedBeers = this.shoppingCartService.getBeers();
  }

  getQuantity(beer: Beer) {
    return this.addedBeers.filter(item => item.name == beer.name).length
  }

  reactToQuantityChange(isIncreased: boolean, beer: Beer) {
    console.log(isIncreased)
    if (isIncreased) {
      this.addedBeers.push(beer)
      this.shoppingCartService.addBeerIntoCart(beer)
    } else {
      this.addedBeers.splice(this.addedBeers.indexOf(beer), 1)
      this.shoppingCartService.removeBeerFromCart(beer)
    }
  }

  calculateItemsPrice() {
    return this.shoppingCartService.calculateItemsPrice()
  }

  uniqueBeers() {
    return this.addedBeers.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i)
  }

  
}
