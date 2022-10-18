import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() text: string = "Reset to default"

  constructor() { }

  ngOnInit(): void {
  }

}
