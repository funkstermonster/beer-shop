import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() beer!: Beer

  constructor() { }

}
