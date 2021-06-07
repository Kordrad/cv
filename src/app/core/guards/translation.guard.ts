import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class TranslationGuard implements CanActivate {
  private readonly defaultLang = this.transloco.getDefaultLang();
  private readonly availableLangs = this.transloco.getAvailableLangs();

  constructor(private router: Router, private transloco: TranslocoService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { lang } = route.params;
    return !this.availableLangs.includes(lang)
      ? this.router.parseUrl(this.defaultLang)
      : true;
  }
}
