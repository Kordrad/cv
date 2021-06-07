import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { PrinterFill } from '@ant-design/icons-angular/icons';
import { UtilsService } from '../services/utils.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';

interface LanguageLink {
  url: string;
  img: string;
  alt: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit, OnDestroy {
  title = '';

  readonly languages: LanguageLink[] = [
    {
      url: 'pl',
      img:
        'https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/PL%402x.png',
      alt: 'Poland'
    },
    {
      url: 'en',
      img:
        'https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/GB%402x.png',
      alt: 'English'
    }
  ];

  private readonly userName$ = this.translate.selectTranslate('user.name');
  private readonly ngUnsubscribe$ = new Subject();

  constructor(
    private iconService: IconService,
    private translations: UtilsService,
    private translate: TranslocoService,
    private titleService: Title,
    private cdr: ChangeDetectorRef
  ) {
    this.iconService.addIcon(...[PrinterFill]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  ngOnInit(): void {
    this.setTitleByTranslate();
  }

  changeLang(lang: string): void {
    this.translate.setActiveLang(lang);
  }

  setTitleByTranslate(): void {
    this.userName$
      .pipe(distinctUntilChanged(), takeUntil(this.ngUnsubscribe$))
      .subscribe((name) => {
        this.title = this.translations.generateTitle(
          name,
          this.translate.getActiveLang()
        );
        this.titleService.setTitle(this.title);
        this.cdr.detectChanges();
      });
  }

  print(): void {
    window.print();
  }
}
