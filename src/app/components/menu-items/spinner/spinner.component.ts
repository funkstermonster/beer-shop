import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() number: number = 0;
  @Output() changedQuantityEmitter: EventEmitter<boolean> = new EventEmitter()
  
  constructor() {}

  ngOnInit(): void {}

  increase() {
    this.number++;
    this.emitChangedQuantityNumber(true);
  }

  decrease() {
    if (this.number > 0) {
      this.number--;
      this.emitChangedQuantityNumber(false);
    }
  }

  emitChangedQuantityNumber(isIncreased: boolean) {
    this.changedQuantityEmitter.emit(isIncreased)
  }
}
