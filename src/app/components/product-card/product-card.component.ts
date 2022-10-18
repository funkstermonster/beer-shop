import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() beer!: Beer

  isOnSale: boolean = false
  isSoldOut: boolean = false
  isNew: boolean = false
  isProductOfTheWeek = false
  numberOfBadges = 0


  constructor() { }

  ngOnInit(): void {
    this.generateBadges();
  }

  generateBadges() {
    this.randomizeOnSale()
    this.randomizeSoldOut()
    this.randomizeNew()
    this.randomizeProductOfTheWeek()
  }

  generateRandomNumber(): number {
    return Math.random()*10+Math.random()*5
  }

  generateVolumeNumber(): number {
    return Math.random() + 0.1
  }

  private randomizeOnSale() {
    if (Math.random() > 0.60 && this.numberOfBadges < 2) {
      this.isOnSale = true;
      this.numberOfBadges++
    }
  }

  private randomizeSoldOut() {
    if (Math.random() > 0.66 && this.numberOfBadges < 2) {
      this.isSoldOut = true;
      this.numberOfBadges++
    }
  }

  private randomizeNew() {
    if (Math.random() > 0.75 && this.numberOfBadges < 2) {
      this.isNew = true;
      this.numberOfBadges++
    }
  }

  private randomizeProductOfTheWeek() {
    if (Math.random() > 0.85 && this.numberOfBadges < 2) {
      this.isProductOfTheWeek = true;
      this.numberOfBadges++
    }
  }



}
