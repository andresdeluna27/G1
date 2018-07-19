import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  numeros = [];
  max = 5;
  luchadores = ["Finn", "Brock lesnar", "Kurt Angle", "Aj Styles", "Randy Orton"];
  puntos = [0,0,0,0,0];
  resultados: number[][] = [[0],[0]];
  constructor() {}

  ngOnInit() {
    let i = 0;
    while (i <= 5) {
      this.numeros.push(i);
      i++;
    }
    this.resultados = new Array();
    for (var j = 0; j <= this.max; j++) {
      let row = new Array();
      for (var k = 0; k <= this.max; k++) {
        row.push(0);
      }
      this.resultados.push(row);
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
    while (i <= this.max) {
      this.numeros.push(i);
      i++;
    }
    this.resultados = new Array();
    for (var j = 0; j <= this.max; j++) {
      let row = new Array();
      for (var k = 0; k <= this.max; k++) {
        row.push(Math.floor((Math.random() * 3) + 0))
      }
      this.resultados.push(row);
    }
    console.log(this.resultados[1][1]);
  }
  revisaNombre(i,k) {
    if (i == 0) {
      return this.luchadores[k - 1];
    } else {
      return this.luchadores[i - 1];
    }
  }

  getResultado(i,k) {
    return this.resultados[i][k];
  }

  prueba() {
    let res = "";
    for (var j = 0; j <= this.max; j++) {
      for (var k = 0; k <= this.max; k++) {
        res += this.resultados[j][k];
      }
      res += '\n';
    }
    console.log(res);
    this.conteo();
    this.mostrar();
  }

  conteo() {
    this.puntos = [0, 0, 0, 0, 0];
    for (var i = 0; i <= this.max; i++) {
      for (var j = 0; j <= this.max; j++) {
        if (j != i && i != 0 && j != 0) {
          if (this.resultados[i][j]==1) {
            this.puntos[i-1] += 3;
          }
        }
      }
    }
  }

  mostrar() {
    for (var i = 0; i < this.luchadores.length; i++) {
      console.log(this.luchadores[i]+" "+this.puntos[i].toString());
    }
  }

}
