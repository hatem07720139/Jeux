import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // public typeplay="";
  // public n=0;
  player = 'X';
  game = ['','','','','','','','','',]
  players(index){
    this.game[index] = this.player;
    this.player = this.player === 'O' ? 'X' : 'O';
    console.log(this.game)
    // return;
    // for (let i = 0; i < 9; i++) {
    //   if (this.n%2===0) {
    //     this.typeplay="X";
    //     this.n=this.n+1;
    //   }else{
    //     this.typeplay="O";
    //     this.n=this.n+1;
    //   }
    // }
    // console.log(n);
  }
  constructor() { }

  ngOnInit() {
  }
  
}
