import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  navdata:object
  constructor(private s:DetailsService,private r:Router) { }
  beverages:object
  ngOnInit() {
    this.s.beverags().subscribe(resp=>this.beverages=resp)
    this.s.navbar().subscribe(resp=>this.navdata=resp)
  }
  fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }
}
