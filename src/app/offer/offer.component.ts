import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
offrs:object
  constructor(private s:DetailsService, private r:Router) {
   
   }

  ngOnInit() {
    this.s.getoffers().subscribe(resp=>this.offrs=resp)
  } 
  fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }

}
