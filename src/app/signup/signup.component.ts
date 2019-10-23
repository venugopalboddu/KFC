import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;

  eye1=true
  eye2=false
  val:any="password"
  constructor(private formBuilder: FormBuilder,private s:DetailsService, private r:Router) { }
   
  ngOnInit() {
     
  }
  registerForm = this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    mobile:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    check1:['',Validators.required],
    check2:['',Validators.required]
});

  get f() { return this.registerForm.controls; }

  onsubmit() {
      this.submitted = true;

      
      if (this.registerForm.invalid) {
        return;
          
      }
    
    this.s.signup(this.registerForm.value).subscribe(resp=>{console.log(resp)},err=>console.log(err) )
    alert("your are successfully created your account")
    this.r.navigate(['/login'])

     
  }

  eye(){
    this.val="text";
    this.eye1=false;
    this.eye2=true;
  }
  eyes(){
    this.val="password";
    this.eye1=true;
    this.eye2=false;
  }
}
