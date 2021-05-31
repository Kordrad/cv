import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconService } from '@ant-design/icons-angular';
import { PrinterFill } from '@ant-design/icons-angular/icons';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  title: string;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslocoService,
    private titleService: Title,
    private iconService: IconService
  ) {
    this.title = this.titleService.getTitle();
    this.iconService.addIcon(...[PrinterFill]);
  }

  changeLang(lang: string): void {
    const userName = this.translate.translate('user.name');
    this.translate.setActiveLang(lang);
    this.title = `${userName} - CV ${lang.toUpperCase()}`;
    this.titleService.setTitle(this.title);
  }

  print(): void {
    window.print();
  }
}
