import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/model/beer';
import { BeerService } from 'src/app/service/beer.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  beerId: number = -1
  beer: Beer[] = []
  isLoading: boolean = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private beerService: BeerService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.beerId = data["id"]
      this.beerService.getBeerDetails(this.beerId).subscribe(data => {
        this.beer = data        
        this.beer[0].price = this.generatePrice()
        this.beer[0].oldPrice = this.generatePrice()
        this.beer[0].volume = this.generatePrice()
        this.storageService.addBeer(this.beer[0])
        this.isLoading = false
      })
    })
  }

  generatePrice(): number {
    return Math.random() * 10 + Math.random() * 5;
  }

}
