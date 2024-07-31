import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/routes/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/routes/auth/components/sign-up/sign-up.component';
import { ActivationComponent } from 'src/app/routes/auth/components/activation/activation.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'activate/:id', component: ActivationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
