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

  cambio() {//es la funcion que cambia dinamicamente la tabla de cruces
    if (this.max < 2) {//no permite menos de 2  contrincantes pero no mas de 8
      this.max = 2;
    } else if (this.max > 8) {
      this.max = 8;
    }
    this.ajustaNombres(this.max);
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
        //row.push(Math.floor((Math.random() * 3) + 0))
        row.push(0);
      }
      this.resultados.push(row);
    }
    this.conteo();
  }
  ajustaNombres(x) {
    if (this.luchadores.length < this.max) {
      while (this.luchadores.length <= this.max) {
        this.luchadores.push("Nuevo");
      }
    }
  }

  revisaNombre(i,k) {//regresa el nombre del participante según si es la columna o renglon principal
    if (i == 0) {
      return this.luchadores[k - 1];
    } else {
      return this.luchadores[i - 1];
    }
  }

  getResultado(i,k) {//regresa la matriz de resultados usada para el conteo
    return this.resultados[i][k];
  }

  prueba() {//solo sirve para pruebas en consola
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

  conteo() { //hace el conteo de puntos segun los select
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

  mostrar() { //sirve solo para pruebas en consola
    for (var i = 0; i < this.luchadores.length; i++) {
      console.log(this.luchadores[i]+" "+this.puntos[i].toString());
    }
  }

}
