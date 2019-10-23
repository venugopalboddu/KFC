import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {
navdata:object
  constructor(private s:DetailsService) { }

  ngOnInit() {
    this.s.navbar().subscribe(resp=>this.navdata=resp)
  }

}
