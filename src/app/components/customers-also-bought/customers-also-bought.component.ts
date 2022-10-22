import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-customers-also-bought',
  templateUrl: './customers-also-bought.component.html',
  styleUrls: ['./customers-also-bought.component.scss']
})
export class CustomersAlsoBoughtComponent implements OnInit {

  viewedBeers: Beer[] = []
  
  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.viewedBeers = this.storageService.getViewedBeers()
  }

  shouldDisplay(): boolean {
    return this.viewedBeers.length > 0
  }

}
