import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  private fb = inject(FormBuilder)
  loginForm = this.fb.group({
    email: ["",[Validators.email,Validators.required]],
    password: ["",[Validators.required,Validators.minLength(8)]]
  }) 
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }
  onSubmite(){
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is not valid');
      this.loginForm.markAllAsTouched(); // Highlights errors if user clicks submit empty
    }
  }
}
