import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  beers: Beer[] = []

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(data => {
      this.beers = data
    })
  }

}
