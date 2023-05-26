import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="happy banking with us"
  pdata="ACC NO"

  login(){
    alert(`login working`)
  }
  acnochange(event:any){
      console.log(event.target.value);
      
  }
}
