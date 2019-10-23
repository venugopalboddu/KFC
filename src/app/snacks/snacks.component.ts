import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  snacks:object;
  navdata:object
  constructor(private s:DetailsService,private r:Router) { }

  ngOnInit() {
    this.s.snacks().subscribe(resp=>this.snacks=resp)
    this.s.navbar().subscribe(resp=>this.navdata=resp)
  }
  fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }

}
