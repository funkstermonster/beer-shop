import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist-logo',
  templateUrl: './wishlist-logo.component.html',
  styleUrls: ['./wishlist-logo.component.scss']
})
export class WishlistLogoComponent implements OnInit {

  wishlistCounter: number = 0;
  wishlisted: Beer[] = []

  constructor(private wishlistService: WishlistService) {  }
  
  ngOnInit(): void {
    this.wishlisted = this.wishlistService.getLovedBeers()
    this.updateCounter()
    this.wishlistService.data.subscribe(data => {
      this.wishlistCounter = data
    })
  }

  updateCounter() {
    this.wishlistCounter = this.wishlisted.length
  }


}
