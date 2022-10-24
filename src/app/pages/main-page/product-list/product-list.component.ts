import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from 'src/app/model/beer';
import { BeerService } from 'src/app/service/beer.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  beers: Beer[] = [];
  tmpBeers: Beer[] = [];
  isOnSale: boolean = false;
  isSoldOut: boolean = false;
  isNew: boolean = false;
  isProductOfTheWeek = false;
  numberOfBadges = 0;
  currentPage = 1;

  public searchObservable$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor(
    private beerService: BeerService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.beerService.getBeers(this.currentPage).subscribe((data) => {
      this.beers = data;
      this.beers.forEach((currentBeer) => {
        currentBeer.price = this.generatePrice();
        currentBeer.volume = this.generateVolumeNumber();
        this.clearBadges();
        this.generateBadges();
        currentBeer.isNew = this.isNew;
        currentBeer.isOnSale = this.isOnSale;
        currentBeer.isProductOfTheWeek = this.isProductOfTheWeek;
        currentBeer.isSoldOut = this.isSoldOut;
        if (currentBeer.isOnSale) {
          currentBeer.oldPrice = this.generatePrice();
        }
        this.tmpBeers = this.beers;
      });
    });

    this.subscribeToSearch();
  }

  nextPage(): void {
    this.currentPage++
    this.beerService.getBeers(this.currentPage).subscribe((data) => {
      data.forEach((currentBeer) => {
        currentBeer.price = this.generatePrice();
        currentBeer.volume = this.generateVolumeNumber();
        this.clearBadges();
        this.generateBadges();
        currentBeer.isNew = this.isNew;
        currentBeer.isOnSale = this.isOnSale;
        currentBeer.isProductOfTheWeek = this.isProductOfTheWeek;
        currentBeer.isSoldOut = this.isSoldOut;
        if (currentBeer.isOnSale) {
          currentBeer.oldPrice = this.generatePrice();
        }
        this.tmpBeers = this.beers;
      });
      this.beers = this.beers.concat(data);
    });
  }

  subscribeToSearch() {
    this.searchService.data.subscribe((data) => {
      if (data == '') {
        this.beers = this.tmpBeers;
      } else {
        this.beers = this.tmpBeers.filter(function (e) {
          return e.name.toLowerCase().includes(data.toLowerCase());
        });
      }
    });
  }

  private generateBadges() {
    this.randomizeOnSale();
    this.randomizeSoldOut();
    this.randomizeNew();
    this.randomizeProductOfTheWeek();
  }

  private generatePrice(): number {
    return Math.random() * 10 + Math.random() * 5;
  }

  private generateVolumeNumber(): number {
    return Math.random() + 0.1;
  }

  private clearBadges() {
    this.numberOfBadges = 0;
    this.isNew = false;
    this.isOnSale = false;
    this.isProductOfTheWeek = false;
    this.isSoldOut = false;
  }

  private randomizeOnSale() {
    if (Math.random() > 0.6 && this.numberOfBadges < 2) {
      this.isOnSale = true;
      this.numberOfBadges++;
    }
  }

  private randomizeSoldOut() {
    if (Math.random() > 0.66 && this.numberOfBadges < 2) {
      this.isSoldOut = true;
      this.numberOfBadges++;
    }
  }

  private randomizeNew() {
    if (Math.random() > 0.75 && this.numberOfBadges < 2) {
      this.isNew = true;
      this.numberOfBadges++;
    }
  }

  private randomizeProductOfTheWeek() {
    if (Math.random() > 0.85 && this.numberOfBadges < 2) {
      this.isProductOfTheWeek = true;
      this.numberOfBadges++;
    }
  }

  onScrollDown() {
    this.nextPage();
  }
}
