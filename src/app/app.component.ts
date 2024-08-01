import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from 'src/app/core/services/user.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isLoginPage: boolean = false;

  constructor(
    private router: Router,
    public userService: UserService,
    ) {
    router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = ['/auth/sign-in', '/auth/sign-up'].includes(this.router.url) || this.router.url.includes('/auth/activate');
      }
    });
  }
}
