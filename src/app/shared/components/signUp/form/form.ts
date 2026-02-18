import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  private fb = inject(FormBuilder)

  signUpForm = this.fb.group({
    name:["",[Validators.required,Validators.min(3),Validators.max(6)]],
    email:["",[Validators.required,Validators.email,]],
    password:["",Validators.required,Validators.min(6)],
    confirmpassword:["",Validators.required,Validators.min(6)],
  })

  get name(){
    return this.signUpForm.get("name");
  }
  get email(){
    return this.signUpForm.get("emai");
  }
  get password(){
    return this.signUpForm.get("password");
  }
  get confirmpassword(){
    return this.signUpForm.get("confirmpassword");
  }

}
