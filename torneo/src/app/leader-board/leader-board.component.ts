import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  @Input() puntaje;
  @Input() luchadores;
  constructor() { }

  ngOnInit() {
  }

}
