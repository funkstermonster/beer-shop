import { Component, OnInit } from '@angular/core';
import { Beer } from './model/beer';
import { BeerService } from './service/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beer-shop';

  beers: Beer[] = []

  constructor(private beerService: BeerService) {}


  ngOnInit(): void {
    this.beerService.getBeers().subscribe(data => {
      this.beers = data
    })
  }
}
