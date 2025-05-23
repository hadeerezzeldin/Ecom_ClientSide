// import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from '../identity.service';



@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private fb:FormBuilder , private _service:IdentityService  ){
this.formGroup = this.fb.group({
 UserName:['', [Validators.required, Validators.minLength(6)]],
 email:['',[Validators.required , Validators.email]],
 DisplayName:['',Validators.required],
 Password:['',Validators.required ]

})

}
  ngOnInit(): void {
   
  }

  get _username(){
  return this.formGroup.get("UserName");
}

  get _email(){
  return this.formGroup.get('email');
}
  get _DisplayName(){
  return this.formGroup.get("DisplayName");
}
  get _password(){
  return this.formGroup.get("Password");
}


Submit() {
  if (this.formGroup.valid) {
    this._service.register(this.formGroup.value).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
}


