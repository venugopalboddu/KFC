import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   srch=true
   cancl=false
   si="sign in";
   so="sign out"
   name;
   name3;
   sat:any
   lsat:any
   status=false
   ss=true
   sos=false
  //  log=false
   get:any
  
  constructor( private r:Router,private s:DetailsService) {
     this.s.getMessage().subscribe(message => {this.name3=message,
      console.log(this.name3)
      if(this.name3=="true"){
        this.sat=localStorage.getItem("sat")
        if(this.sat=="true"){
    
        
        this.name=localStorage.getItem("nam")
        
        this.lsat=localStorage.getItem("lsat")
        if(this.sat==="true" && this.lsat=="true"){
          this.status=true
          this.ss=false
          this.sos=true
        }
      }
      }
    })
   
   }
  ngOnInit() {
   }
  search(){
    this.cancl=true
    this.srch=false
    localStorage.setItem("stat","true")
    //this.r.navigate(['/hiddennav'])
  }
  cancel(){
    this.cancl=false
    this.srch=true
  }
  login(){
        this.r.navigate(['/login'])
  }
  signout(){
    this.status=false
   this.ss=true
   this.sos=false
  }
}
