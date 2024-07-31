import { Component, DestroyRef, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/routes/auth/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private destroyRef: DestroyRef,
    private authService: AuthService,
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      grantType: ['password', [Validators.required]]
    });
  }

  public onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((): void => {
        this.router.navigate(['home'])
      })
    } else {
      this.loginForm.markAllAsTouched();
      // this.toast.show.next({severity: 'error', summary: 'Something went wrong', detail: 'Something went wrong'})
    }
  }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     // Perform login logic here
  //     console.log(this.loginForm.value);
  //     this.router.navigate(['/home']);
  //   }
  // }
}
