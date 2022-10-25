import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { FilterObject } from 'src/app/model/filter-object';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-beer-filter',
  templateUrl: './beer-filter.component.html',
  styleUrls: ['./beer-filter.component.scss']
})
export class BeerFilterComponent implements OnInit {

  beers: Beer[] = [];
  abvFrom?: number
  abvUntil?: number
  isIpa?: boolean

  @Output() filteredBeersEmitter = new EventEmitter<Beer[]>()
  
  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
  }

  apply() {
    let filterObject = this.constructFilterObject()
    this.beerService.filterBeers(filterObject).subscribe(data => {
      this.beers = data
      this.emitFilteredBeers()
    })
  }

  private constructFilterObject(): FilterObject {
    let filterObject: FilterObject = {
      abv_gt: this.abvFrom,
      abv_lt: this.abvUntil
    }

    if (this.isIpa) {
      filterObject.ibu_gt = 60
      filterObject.ibu_lt = 80
    }
    return filterObject
  }

  private emitFilteredBeers() {
    this.filteredBeersEmitter.emit(this.beers)
  }

}
