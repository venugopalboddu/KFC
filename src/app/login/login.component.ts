import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ldetails: any;
  submitted = false;
  flag;
  val:any="password"
  name: any;
  id1: any;
  d: any;
  eye1=true
  eye2=false
  inputflag: boolean = true;
  constructor(private formBuilder: FormBuilder, private s: DetailsService, private r: Router) { }

  ngOnInit() {


  }
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get f() { return this.registerForm.controls; }

  key: any;

  inputstatus = "true"
  clearMessages(): void {
    this.s.clearMessages();
  }
  getd() {
    this.s.data().subscribe((resp) => { this.ldetails = resp });
  }
  @Output() trigger = new EventEmitter();
  @Output() fire = new EventEmitter();
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.s.data().subscribe((resp) => {
    this.ldetails = resp; console.log(this.ldetails)
      for (this.key in this.ldetails) {
        if (this.ldetails[this.key].email == this.registerForm.value.email && this.ldetails[this.key].password == this.registerForm.value.password) {
          this.flag = 1
          this.name = this.ldetails[this.key].firstname

          localStorage.setItem("nam", this.name)
          localStorage.setItem("sat", "true")
          localStorage.setItem("lsat", "true")
          this.s.sendMessage(this.inputstatus);
        } else {
          continue
        }
      }
      if (this.flag == 1) {
        this.trigger.emit(this.inputflag);
        this.fire.emit(this.name);
        this.r.navigate(['/menu']);
      } else {
        alert("wrong credentails")
      }
    });
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
