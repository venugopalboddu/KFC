import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  submitted = false
  pass:any
  id:any;
  data:any
  sat=false;
  val="password"
  val1="password"
  eye1=true
  eye2=false
  ceye1=true
  ceye2=false
  constructor(private formBuilder: FormBuilder,private a:ActivatedRoute,private s:DetailsService,private r:Router) { }

  ngOnInit() {
    this.id=this.a.snapshot.params.id;
    console.log(this.id)
    this.s.reset(this.id).subscribe(resp=>{this.data=resp
      console.log(this.data)
      })
  }
  passform = this.formBuilder.group({
    npass: ['', [Validators.required, Validators.minLength(6)]],
    cpass: ['', [Validators.required, Validators.minLength(6)]]
  });

  get f() { return this.passform.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.passform.invalid) {
      return;
    }
    if(this.passform.value.npass===this.passform.value.cpass){
      this.sat=false
      console.log("password match")
      this.s.updatepass(this.id,this.passform.value.cpass).subscribe(resp=>{console.log(resp)
      this.r.navigate(['/login'])
      })
    }else{
       this.sat=true
    }
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

  ceye(){
    this.val1="text";
    this.ceye1=false;
    this.ceye2=true;
  }
  ceyes(){
    this.val1="password";
    this.ceye1=true;
    this.ceye2=false;
  }
}
