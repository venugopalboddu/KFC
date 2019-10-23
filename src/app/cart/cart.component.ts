import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 data:any
 cal:any
 mdsat=false
 remove:number=0;
  itemtotal:number=0;
  discount:number=0;
 cpnname:any="";
  atp:any;
  dcharges:number=30;
  quanty:any;
  q:any;
  qprice1:any=0;
  q1price:any;
  one: any;
  constructor(private s:DetailsService) { }
  ngOnInit() {
    this.s.cartget().subscribe(resp=>{this.data=resp
    
      for(var i in this.data){
        
        this.itemtotal=this.itemtotal+Number(this.data[i].qprice)
      }if(this.itemtotal<=0){
        this.dcharges=0;
      }else{
        this.dcharges=30;
      }
      this.atp=this.itemtotal+this.dcharges-this.discount;
    })
    
  }

  fun(e){
     
    this.s.cartdelete(e).subscribe(resp=>{console.log(resp)
    if(resp){
      this.s.cartget().subscribe(resp=>{this.data=resp
        this.itemtotal=this.itemtotal-this.remove
        if(this.cpnname==="FIRSTUSER"){
          this.discount=(this.itemtotal/100)*50;
          console.log(this.discount)
      }
      if(this.cpnname==="KFCIT"){
        this.discount=(this.itemtotal/100)*30;
        console.log(this.discount)
    }if(this.itemtotal<=0){
      this.dcharges=0;
    }else{
      this.dcharges=30;
    }
        this.atp=this.itemtotal+this.dcharges-this.discount;
        alert("item successfully removed")
        })
    }
  });
  }
  cpnfun(){ 
    if(this.cpnname==="FIRSTUSER"){
        this.discount=(this.itemtotal/100)*50;
        this.mdsat=true
        console.log(this.discount)
    }
    else if(this.cpnname==="KFCIT"){
      this.discount=(this.itemtotal/100)*30;
      this.mdsat=true
      console.log(this.discount)
  }
  else if(this.cpnname==""){
    alert("Please enter Coupon and Click")
  }
  else{
    alert("Coupon Not Found")
  }
  if(this.itemtotal<=0){
    this.dcharges=0;
  }else{
    this.dcharges=30;
  }
    this.atp=this.itemtotal+this.dcharges-this.discount;
  }
 
  add(e){
   this.s.cartcal(e).subscribe(resp=>{this.quanty=resp
    this.q=this.quanty.quantity+1
    this.q1price=this.quanty.price2
    this.qprice1=this.q1price*this.q
    // console.log(this.q)
    // console.log(this.qprice1)
    this.itemtotal=this.itemtotal+this.q1price
    if(this.cpnname==="FIRSTUSER"){
      this.discount=(this.itemtotal/100)*50;
      console.log(this.discount)
       }
  if(this.cpnname==="KFCIT"){
    this.discount=(this.itemtotal/100)*30;
    console.log(this.discount)
    }
    if(this.itemtotal<=0){
      this.dcharges=0;
    }else{
      this.dcharges=30;
    }
    this.atp=this.itemtotal+this.dcharges-this.discount;
    this.s.cartquan(e,this.q,this.qprice1).subscribe(resp=>{console.log(resp)
      // location.reload();
      if(resp){
        this.s.cartget().subscribe(resp=>{console.log(resp)
        this.data=resp
        }) 
      }
    })
  })
}
sub(e){
  this.s.cartcal(e).subscribe(resp=>{this.quanty=resp
    this.q=this.quanty.quantity-1
    this.q1price=this.quanty.price2
    this.qprice1=this.quanty.qprice-this.q1price
    this.itemtotal=this.itemtotal-this.q1price
    if(this.cpnname==="FIRSTUSER"){
      this.discount=(this.itemtotal/100)*50;
      console.log(this.discount)
       }
    if(this.cpnname==="KFCIT"){
    this.discount=(this.itemtotal/100)*30;
    console.log(this.discount)
    }
    if(this.itemtotal<=0){
      this.dcharges=0;
    }else{
      this.dcharges=30;
    }
    this.atp=this.itemtotal+this.dcharges-this.discount;
    // console.log(this.q)
    // console.log(this.qprice1)
    this.s.cartquan(e,this.q,this.qprice1).subscribe(resp=>{console.log(resp)
      if(this.q==0){
        this.fun(e);
      }
      // location.reload();

      if(resp){
        this.s.cartget().subscribe(resp=>{console.log(resp),
        this.data=resp
        });
       
      }
      
    })
  })
}

}
