import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private ht:HttpClient) {



   }
private subject=new Subject();
sendMessage(message: string) {
  this.subject.next( message );
}

clearMessages() {
  this.subject.next();
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}
  navbar(){
    return this.ht.get("http://localhost:3000/navbar")
  }
  getoffers(){
    return this.ht.get("http://localhost:3000/offers")
  }
  body(){
    
    return this.ht.get("http://localhost:3000/bodypics");
  }

  signup(p:any){
    return this.ht.post("http://localhost:3000/signup",p)
  }
  data(){
  
   return this.ht.get("http://localhost:3000/signup");
  }
  chicken()
  {
    return this.ht.get("http://localhost:3000/chicken")
  }
  rice()
  {
    return this.ht.get("http://localhost:3000/rice")
  }
  bugcomp(){
      return this.ht.get("http://localhost:3000/burger")  
   }
   snacks()
  {
    return this.ht.get("http://localhost:3000/snacks")
  }
  beverags()
  {
    return this.ht.get("http://localhost:3000/beverages")
  }
  cartpost(c:any){
    return this.ht.post("http://localhost:3000/cart",c)
  }
  cartget(){
    return this.ht.get("http://localhost:3000/cart")
  }
  cartdelete(d:number){
    return this.ht.delete("http://localhost:3000/cart/"+d)
  }
  cartcal(d:number){
    return this.ht.get("http://localhost:3000/cart/"+d)
  }
  getfooter() {
    return this.ht.get("http://localhost:3000/footer");
 
   }
   cartquan(d:any,f:any,g:any){
    return this.ht.patch("http://localhost:3000/cart/"+d,{
       "quantity":f,
       "qprice":g
     })
   }

   reset(e){
     return this.ht.get("http://localhost:3000/signup/"+e)
   }
   updatepass(e:any,p:any){
   return this.ht.patch("http://localhost:3000/signup/"+e,{
     "password":p
    })

   }
   
} 
