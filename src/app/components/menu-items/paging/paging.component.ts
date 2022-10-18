import { Component } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {

  page: number = 1;

  constructor() { }

  nextPage() {
    if (this.page < 5) {
      this.page++
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--
    }
  }
}
