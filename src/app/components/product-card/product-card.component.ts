import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() beer?: Beer;
  constructor(private wishlistService: WishlistService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void { 
  }

  addBeer() {
    if(this.beer) {
     this.wishlistService.addBeerIntoWishlist(this.beer);
    }
  }
  addToCart() {
    if(this.beer)
    this.shoppingCartService.addBeerIntoCart(this.beer);
  }




}
