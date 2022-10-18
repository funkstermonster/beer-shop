import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() inputText: string = "Placeholder Text"


  constructor() { }

  ngOnInit(): void {
  }

}
