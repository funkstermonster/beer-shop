import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  number:number = 0;
  constructor() {}

  ngOnInit(): void {}

  increase() {
    this.number++;
  }

  decrease() {
    if (this.number > 0) {
      this.number--;
    }
  }
}
