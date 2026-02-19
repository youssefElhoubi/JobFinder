import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../../../../core/services/job/auth/Authservice';
import { Redirect } from '../../../service/redirect';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  redirector = inject(Redirect);
  private fb = inject(FormBuilder)
  error: string = '';
  private authservice = inject(Authservice)
  loginForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })
  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }
  onSubmite() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      this.authservice.login(email!, password!).subscribe({
        next: (user) => {
          console.log(user);
          if (user.length == 0) {
            this.error = "wrong email or password"
          }
          localStorage.setItem("user", user[0].id.toString())
          this.redirector.navigator("/home")
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.loginForm.markAllAsTouched(); // Highlights errors if user clicks submit empty
    }
  }
}
