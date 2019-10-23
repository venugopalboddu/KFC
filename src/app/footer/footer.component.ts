import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  details;
  constructor(private s:DetailsService) { }

  ngOnInit() {
    this.s.getfooter().subscribe(res=>this.details=res);

  }

}
