import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  @Input() puntaje;
  @Input() luchadores;
  @Input() iter;
  constructor() {
    /*let i = this.luchadores.length;
    let j = 0;
    while (j < i) {
      this.iter.push(j);
      j++;
    }*/
  }

  ngOnInit() {
  }

}
