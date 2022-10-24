import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishedBeers: Beer[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishedBeers = this.getBeers();
  }

  getBeers() {
    return this.wishlistService.getLovedBeers();
  }

}
