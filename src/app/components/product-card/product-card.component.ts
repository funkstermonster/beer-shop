import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() beer?: Beer
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void { 
  }

  addBeer() {
    if(this.beer) {
     this.wishlistService.addBeerIntoWishlist(this.beer);
    }
  }


}
