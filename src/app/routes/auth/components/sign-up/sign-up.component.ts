import { Component, DestroyRef, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/routes/auth/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private destroyRef: DestroyRef,
    private authService: AuthService,
    ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        // role: new FormControl('user', [Validators.required]),
        phone: new FormControl('37493806077', []),
        gender: new FormControl('MALE', []),
      },
      {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value
      ? null : {mismatch: true};
  }

  public onRegister(): void {
    // this.loadingService.show();
    if (this.registerForm.valid) {
      let obj = Object.assign(this.registerForm.value, {})
      delete obj.confirmPassword
      this.authService.signUp(this.registerForm.value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((): void => {
        this.router.navigate(['auth/activate', this.registerForm.get('username').value])
      })
    } else {
      this.registerForm.markAllAsTouched();
      // if (this.registerForm.errors && this.registerForm.errors['passwordsNotEqual']) {
      //   this.errMessage = this.translatePipe.transform('Passwords do not match')
      // }
      // this.toast.show.next({severity: 'error', summary: '', detail: this.errMessage})
    }
  }
}
