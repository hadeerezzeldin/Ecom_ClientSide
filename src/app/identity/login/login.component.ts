import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
formGroup:FormGroup;

constructor( private fb:FormBuilder, private service:IdentityService){}
  ngOnInit(): void {
    this.FormValidation();
  }


FormValidation(){
this.formGroup = this.fb.group({

  email:['',[Validators.required, Validators.email]],
  PAssword:['',[Validators.required]]
})
}


  get _email(){
  return this.formGroup.get('email');
}

  get _password(){
  return this.formGroup.get("Password");
}

Submit(){
  if(this.formGroup.valid){
  this.service.Login(this.formGroup).subscribe({
  next(value){
    console.log(value)
  },
  error(err){
    console.log(err)
  }
 })
  }

}
}
