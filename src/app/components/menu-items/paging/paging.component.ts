import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {

  @Output() currentPageEmitter: EventEmitter<number> = new EventEmitter<number>()

  currentPage: number = 1;

  @Input() itemsPerPage: number = 3
  @Input() numberOfItems: number = -1

  constructor() { }

  nextPage() {
    if (this.currentPage < Math.ceil(this.numberOfItems / this.itemsPerPage)) {
      this.currentPage++
      this.currentPageEmitter.emit(this.currentPage)
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--
      this.currentPageEmitter.emit(this.currentPage)
    }
  }

  getNumberOfPages() {
    return Array(Math.ceil(this.numberOfItems / this.itemsPerPage))
  }
}
