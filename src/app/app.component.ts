import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  TotalGold = 0;
  Msg =[];
  ngOnInit(){
    this.Gold;
    this.Msg;
  }
  Gold(){
    console.log(this.TotalGold);
    
  }
  FarmGold(){
    let farmGold = Math.floor(Math.random() * 4 + 2)
    this.TotalGold += farmGold;
    console.log("Farm Gold " + farmGold) ;
    this.Msg.unshift("Farm Gold : " + farmGold)
    
  }
  CaveGold(){
    let gold = Math.floor(Math.random() * 6 + 5)
    this.TotalGold += gold;
    console.log("Cave Gold " + gold) ;
    this.Msg.unshift("Cave Gold : " + gold);
    
  }
  HouseGold(){
    let gold = Math.floor(Math.random() * 9 + 7)
    this.TotalGold += gold;
    console.log("House Gold " + gold) ;
    this.Msg.unshift("House Gold : " + gold)
    
  }
  CasinoGold(){
    let gold = Math.floor(Math.random() * 200 -100)
    this.TotalGold += gold;
    console.log("Casino Gold " + gold) ;
    this.Msg.unshift("Casino Gold : " + gold)
    
  }
  reset(){
    this.TotalGold = 0;
    this.Msg = [];
  }
  
}
