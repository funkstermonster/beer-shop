import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchQuery: string = ""
  @Output() searchQueryEmitter: EventEmitter<string> = new EventEmitter()

  constructor(
    private searchService: SearchService
  ) { }

  emitSearchQuery() {
    this.searchQueryEmitter.emit(this.searchQuery)
  }

  valueChange(event: any) {
    this.searchQuery = event.target.value
  }

  onSubmit() {
    this.searchService.updateData(this.searchQuery);
  }

}
