import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuerySource = new BehaviorSubject<string>("");
  data = this.searchQuerySource.asObservable();

  constructor() {}

  updateData(data: string) {
    this.searchQuerySource.next(data);
  }
}
