import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  winner: boolean;
  player = 'X';
  game = ['', '', '', '', '', '', '', '', '',]
  players(index) {
    if (this.game[index] === '') {
      this.game[index] = this.player;
      this.player = this.player === 'O' ? 'X' : 'O';
    }
  }
  Thewinner(playX, playO) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      this.winner = false;
      if (this.game[a] && this.game[a] === this.game[b] && this.game[a] === this.game[c]) {
        alert("the Winner is Player " + this.game[a])
        if (this.game[a] === "X") {
          playX.value = Number(playX.value) + 1;
        }
        else {
          playO.value = Number(playO.value) + 1;
        }
        this.winner = true;
        break;
      }
    }
    for (let i = 0; i < this.game.length; i++) {
      if (this.winner === true) {
        this.game[i] = "";
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
