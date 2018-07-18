import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  numeros = [];
  max=0;
  constructor() {}

  ngOnInit() {
    let i = 0;
    while (i < 5) {
      this.numeros.push(i);
      i++;
    }

  }

  cambio() {
    if (this.max < 2) {
      this.max = 2;
    } else if (this.max > 6) {
      this.max = 6;
    }
    this.numeros = [];
    let i = 0;
    while (i < this.max) {
      this.numeros.push(i);
      i++;
    }
  }

}
