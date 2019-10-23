import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  navdata:object
  burger:object
  
  constructor(private s:DetailsService,private r:Router) { }

  ngOnInit() {
    this.s.bugcomp().subscribe(res=>this.burger=res)
    this.s.navbar().subscribe(resp=>this.navdata=resp)
  }

  fun(e){
    this.s.cartpost(e).subscribe(resp=>console.log(resp))
  }
  cart(){
    this.r.navigate(['/cart'])
  }

}
