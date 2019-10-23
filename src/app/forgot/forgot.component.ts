import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  submitted = false;
  data:any;
  key:any;
  flag
  obj:any;
  id:any
  pass:any
  constructor(private formBuilder: FormBuilder, private s: DetailsService, private r: Router) { }

  ngOnInit() {

  }
  emailform = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get f() { return this.emailform.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.emailform.invalid) {
      return;
    }
    this.s.data().subscribe(resp=>{this.data=resp
      for (this.key in this.data) {
        if (this.data[this.key].email == this.emailform.value.email) {
          this.flag = 1
          this.obj=this.data[this.key]
        } else {
          continue
        }
      }
      if (this.flag == 1) {
        this.id=this.obj.id;
        this.r.navigate(['/reset',this.id]);
      } else {
        alert("email not found")
      }
    
    
    
    })


  }

}
