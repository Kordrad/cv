import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {IconService} from '@ant-design/icons-angular';
import {PhoneFill, MailFill, LinkedinFill, GithubFill, CaretUpFill} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})


export class PageComponent {
  activeMenu = false;

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private iconService: IconService) {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);


    this.iconService.addIcon(...[PhoneFill, MailFill, LinkedinFill, GithubFill, CaretUpFill]);
  }
  toggleMenu = () => this.activeMenu = !this.activeMenu;
}
