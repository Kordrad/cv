import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {IconService} from '@ant-design/icons-angular';
import {CaretUpFill, GithubFill, LinkedinFill, MailFill, PhoneFill} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class PageComponent {

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private iconService: IconService) {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);


    this.iconService.addIcon(...[PhoneFill, MailFill, LinkedinFill, GithubFill, CaretUpFill]);
  }

}
