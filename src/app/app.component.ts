import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { filter, first } from 'rxjs/operators';

interface ConsoleInfoInterface {
  text: string;
  style?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly linksKey = 'contact.data';
  private readonly consoleInfo: ConsoleInfoInterface[] = [
    {
      text: ' Hello!',
      style: `
              font-weight: bold;
              font-size: 50px;
              color: red;
              text-shadow:
                3px 3px 0 rgb(217,31,38) ,
                6px 6px 0 rgb(226,91,14) ,
                9px 9px 0 rgb(245,221,8) ,
                12px 12px 0 rgb(5,148,68) ,
                15px 15px 0 rgb(2,135,206) ,
                18px 18px 0 rgb(4,77,145) ,
                21px 21px 0 rgb(42,21,113)
               `
    },
    {
      text:
        'Thanks for your interest in my CV.\n' +
        'Hope you have a nice time checking my site.\n' +
        'I also encourage you to visit my pages:',
      style: 'color: rgba(255,255,255,0.5)'
    }
  ];

  constructor(private translateService: TranslocoService) {}

  ngOnInit(): void {
    this.handleLinks();
  }

  private handleLinks(): void {
    this.translateService
      .selectTranslate(this.linksKey)
      .pipe(
        filter((e) => e.length),
        first()
      )
      .subscribe((links) => {
        const urls = links
          .filter(({ link }) => link.includes('http'))
          .map(({ link: text }) => ({ text }));

        this.displayConsoleInfo(urls);
      });
  }

  private displayConsoleInfo(urls: ConsoleInfoInterface[]) {
    const space: ConsoleInfoInterface = { text: '\n' };
    [space, ...this.consoleInfo, ...urls, space].forEach(({ text, style }) =>
      // eslint-disable-next-line no-restricted-syntax
      console.info(`%c${text}`, style)
    );
  }
}
