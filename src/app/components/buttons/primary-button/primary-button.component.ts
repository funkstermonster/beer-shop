import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() text: string = "Add to Cart"

  constructor() {}

  ngOnInit(): void {}


}
