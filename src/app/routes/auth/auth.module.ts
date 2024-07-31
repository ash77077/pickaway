import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignInComponent } from 'src/app/routes/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/routes/auth/components/sign-up/sign-up.component';
import { ActivationComponent } from 'src/app/routes/auth/components/activation/activation.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ActivationComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
