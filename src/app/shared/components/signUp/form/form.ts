import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Authservice } from '../../../../core/services/job/auth/Authservice';

@Component({
  selector: 'app-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
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
    console.log("here");

    if (this.signUpForm.valid) {
      console.log("here2");
      const { confirmpassword, email, name, password } = this.signUpForm.value;
      if (password !== confirmpassword) {
        this.confirmPasswordError.set("password does not match check your password")
        return
      }
      this.authservice.signUp(name!,email!,password!).subscribe({
        next: (user) => {
          console.log(user);
        },
        error: (err) => {
          console.log(err);
        }
      })
      // console.log(this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched()
    }
  }

}
