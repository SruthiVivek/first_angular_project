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

  acno:any
  psw:any

  constructor(private rout:Router,private ds: DataService){

  }
  ngOnInit():void {
    
  }

  login(){
    var acno=this.acno
    var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
     }
    )
  }
}
