import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favoriteSeason: string='Summer';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
