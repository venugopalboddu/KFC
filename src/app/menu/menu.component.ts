import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private s:DetailsService) { }
  images;
    ngOnInit() {
      this.s.body().subscribe(resp=>this.images=resp,err=>console.log(err))
    }

}
