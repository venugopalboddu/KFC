import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricebowl',
  templateUrl: './ricebowl.component.html',
  styleUrls: ['./ricebowl.component.css']
})
export class RicebowlComponent implements OnInit {
  constructor(private s:DetailsService,private r:Router) { }
  rice:object
  navdata:object
   ngOnInit() {
     this.s.rice().subscribe(resp=>this.rice=resp)
     this.s.navbar().subscribe(resp=>this.navdata=resp)
   }
   fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }
}
