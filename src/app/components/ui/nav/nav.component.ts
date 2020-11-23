import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
import {IconService} from '@ant-design/icons-angular';
import {PrinterFill} from '@ant-design/icons-angular/icons';

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
    public translate: TranslateService,
    private titleService: Title,
    private iconService: IconService) {

    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    this.title = this.titleService.getTitle();
    this.iconService.addIcon(...[PrinterFill]);
  }


  changeLang = (lang: string) => {
    this.translate.use(lang);
    switch (lang) {
      case 'en':
        this.title = 'Konrad Stepien - CV EN';
        break;
      case  'pl':
        this.title = 'Konrad Stępień - CV PL';
        break;
    }
    this.titleService.setTitle(this.title);
  }

  print = () => window.print();
}
