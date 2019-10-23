import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KFC';
  inputstatus:boolean;
  uname;
  inpstatus(q){
    this.inputstatus=q;
    console.log(this.inputstatus);
    alert("in status");
  }
  name(w){
    this.uname=w;
    console.log(this.uname);
    alert("in ustatus");
  }

}
