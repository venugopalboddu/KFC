import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken1',
  templateUrl: './chicken1.component.html',
  styleUrls: ['./chicken1.component.css']
})
export class Chicken1Component implements OnInit {

  navdata:object
  chicken:object;
  constructor(private s:DetailsService, private r:Router) { }

  ngOnInit() {
    this.s.chicken().subscribe(resp=>this.chicken=resp)
    this.s.navbar().subscribe(resp=>this.navdata=resp)
  }
  fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }

}
