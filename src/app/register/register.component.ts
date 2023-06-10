import { Component } from '@angular/core';
import { DataService } from '../DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno:any
  uname:any
  psw:any
  cpsw:any
  constructor(private ds:DataService,private router:Router){}

  signup(){
    var acno=this.acno
    var uname=this.uname
    var psw=this.psw
    var cpsw=this.cpsw

   
   if(psw==cpsw){
          this.ds.register(acno,uname,psw).subscribe((result:any)=>{
            alert(result.message)
            this.router.navigateByUrl('')
          },
          result=>{
            alert(result.error.message)
          }
          )
   }
   else{
    alert("possword doestnt match")
   }
   
   
  }
}
