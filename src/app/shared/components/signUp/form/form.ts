import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Authservice } from '../../../../core/services/auth/Authservice';
import { Redirect } from '../../../service/redirect';

@Component({
  selector: 'app-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  redirector = inject(Redirect);
  confirmPasswordError = signal("");
  private fb = inject(FormBuilder);
  private authservice = inject(Authservice);

  signUpForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmpassword: ["", [Validators.required, Validators.minLength(6)]],
  })

  get name() {
    return this.signUpForm.get("name");
  }
  get email() {
    return this.signUpForm.get("email");
  }
  get password() {
    return this.signUpForm.get("password");
  }
  get confirmpassword() {
    return this.signUpForm.get("confirmpassword");
  }
  onsubmite() {
    if (this.signUpForm.valid) {
      const { confirmpassword, email, name, password } = this.signUpForm.value;
      if (password !== confirmpassword) {
        this.confirmPasswordError.set("password does not match check your password")
        return
      }
      this.authservice.signUp(name!,email!,password!).subscribe({
        next: (user) => {
          localStorage.setItem("user", user.id.toString())
          this.redirector.navigator("/home")
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.signUpForm.markAllAsTouched()
    }
  }

}
