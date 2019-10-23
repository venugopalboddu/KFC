import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiddennav',
  templateUrl: './hiddennav.component.html',
  styleUrls: ['./hiddennav.component.css']
})
export class HiddennavComponent implements OnInit {
  constructor(private r:Router) { }
  srchbox;
  status=true
  ngOnInit() {
    
  }
 fun(){
   if(this.srchbox==="burger"){
   this.r.navigate(['/burgers'])
   }
   else if(this.srchbox==="snacks"){
    this.r.navigate(['/snacks'])
    }
    else if(this.srchbox==="chicken"){
      this.r.navigate(['/chicken1'])
      }
     else if(this.srchbox==="beverages"){
        this.r.navigate(['/beverages'])
        }
       else if(this.srchbox==="rice"){
          this.r.navigate(['/ricebowl'])
          }else{
            alert("search for only in menu items")
          }
 }
  
}
