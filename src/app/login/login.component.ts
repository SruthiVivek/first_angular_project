import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../DataService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="happy banking with us"
  pdata="ACC NO"
  DataService:any
  constructor(private rout:Router,private ds: DataService){

  }
  ngOnInit():void {
    this.DataService=this.ds.sdata
    console.log(this.DataService);
    this.ds.smethod()
    
  }

  login(){
    // alert(`login working`)
    this.rout.navigateByUrl('home')
  }
  acnochange(event:any){
      console.log(event.target.value);
      
  }
}
